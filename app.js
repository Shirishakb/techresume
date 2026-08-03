/* ============================================================
   RENDER ENGINE + ON-PAGE EDITOR
   You shouldn't need to edit this file. It reads content.js
   and builds the page, and powers the pencil-icon edit mode.
   ============================================================ */

(function () {
  const STORAGE_KEY = "portfolioContentOverride";

  // If this browser has local edits saved, use those instead of
  // the shipped content.js — until they're exported and published.
  let data = loadContent();

  function loadContent() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) { /* ignore */ }
    return JSON.parse(JSON.stringify(PORTFOLIO_CONTENT));
  }

  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function el(tag, opts = {}, children = []) {
    const node = document.createElement(tag);
    if (opts.class) node.className = opts.class;
    if (opts.html !== undefined) node.innerHTML = opts.html;
    if (opts.text !== undefined) node.textContent = opts.text;
    if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
    children.forEach((c) => c && node.appendChild(c));
    return node;
  }

  function editableSpan(tag, className, value, onInput) {
    const node = el(tag, { class: className, text: value });
    node.dataset.editable = "true";
    node.addEventListener("input", () => onInput(node.textContent.trim()));
    return node;
  }

  let editMode = false;

  // ---------------- RENDER ----------------

  function render() {
    document.title = data.meta.title;
    renderStatusbar();
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderTimeline();
    renderCertifications();
    renderContact();
    renderFooter();
    applyEditState();
  }

  function renderStatusbar() {
    const bar = document.getElementById("statusbar");
    bar.innerHTML = "";
    const wrap = el("div", { class: "wrap" });
    wrap.appendChild(el("span", { class: "dot" }));
    wrap.appendChild(editableSpan("span", "mono", `STATUS: ${data.hero.status}`, (v) => { data.hero.status = v.replace("STATUS: ", ""); }));
    wrap.appendChild(el("span", { class: "sep", text: "·" }));
    wrap.appendChild(editableSpan("span", "mono", `ROLE: ${data.hero.role}`, (v) => { data.hero.role = v.replace("ROLE: ", ""); }));
    wrap.appendChild(el("span", { class: "sep", text: "·" }));
    wrap.appendChild(editableSpan("span", "mono", `LOCATION: ${data.hero.location}`, (v) => { data.hero.location = v.replace("LOCATION: ", ""); }));
    bar.appendChild(wrap);
  }

  function renderHero() {
    const root = document.getElementById("hero-content");
    root.innerHTML = "";
    const left = el("div");
    left.appendChild(el("div", { class: "hero-role", text: data.hero.role }));
    left.appendChild(editableSpan("h1", "", data.hero.name, (v) => (data.hero.name = v)));
    const p = editableSpan("p", "tagline", data.hero.tagline, (v) => (data.hero.tagline = v));
    left.appendChild(p);
    const actions = el("div", { class: "hero-actions" });
    actions.appendChild(el("a", { class: "btn", text: "Get in touch", attrs: { href: "#contact" } }));
    actions.appendChild(document.createTextNode(" "));
    actions.appendChild(el("a", { class: "btn ghost", text: "View projects", attrs: { href: "#projects" } }));
    left.appendChild(actions);

    const panel = el("div", { class: "hero-panel" });
    const photo = el("div", { class: "hero-photo" }, [
      el("span", { class: "monogram", text: data.hero.initials })
    ]);
    const report = el("div", { class: "hero-report" });
    data.about.stats.forEach((s) => {
      report.appendChild(el("div", { class: "report-row" }, [
        el("span", { class: "check mono", text: "✓" }),
        el("span", { class: "label", text: s.label }),
        el("span", { class: "value mono", text: s.value })
      ]));
    });
    panel.appendChild(photo);
    panel.appendChild(report);

    root.appendChild(left);
    root.appendChild(panel);
  }

  function renderAbout() {
    const root = document.getElementById("about-content");
    root.innerHTML = "";
    const photoWrap = el("div", { class: "about-card" });
    photoWrap.appendChild(el("div", { class: "about-card-monogram", text: data.hero.initials }));
    data.about.quickFacts.forEach((f, fi) => {
      const row = el("div", { class: "fact-row" });
      row.appendChild(el("div", { class: "fact-label mono", text: f.label }));
      row.appendChild(editableSpan("div", "fact-value", f.value, (v) => (data.about.quickFacts[fi].value = v)));
      photoWrap.appendChild(row);
    });
    const textWrap = el("div", { class: "about-text" });
    data.about.paragraphs.forEach((para, i) => {
      textWrap.appendChild(editableSpan("p", "", para, (v) => (data.about.paragraphs[i] = v)));
    });
    const statsRow = el("div", { class: "stats-row" });
    data.about.stats.forEach((s) => {
      statsRow.appendChild(el("div", { class: "stat" }, [
        el("div", { class: "value mono", text: s.value }),
        el("div", { class: "label", text: s.label })
      ]));
    });
    textWrap.appendChild(statsRow);
    root.appendChild(photoWrap);
    root.appendChild(textWrap);
  }

  function renderSkills() {
    const root = document.getElementById("skills-content");
    root.innerHTML = "";
    data.skills.forEach((cat, ci) => {
      const catEl = el("div", { class: "skill-cat" });
      catEl.appendChild(editableSpan("h3", "", cat.category, (v) => (data.skills[ci].category = v)));
      const chips = el("div", { class: "skill-chips" });
      cat.items.forEach((item, ii) => {
        const chip = el("div", { class: "chip" });
        chip.appendChild(editableSpan("span", "", item, (v) => (data.skills[ci].items[ii] = v)));
        const rm = el("button", { class: "remove-btn", html: "&times;" });
        rm.addEventListener("click", () => { data.skills[ci].items.splice(ii, 1); persist(); render(); });
        chip.appendChild(rm);
        chips.appendChild(chip);
      });
      const addChip = el("button", { class: "add-btn", text: "+ Add skill" });
      addChip.addEventListener("click", () => { data.skills[ci].items.push("New skill"); persist(); render(); });
      catEl.appendChild(chips);
      catEl.appendChild(addChip);
      root.appendChild(catEl);
    });
    const addCat = el("button", { class: "add-btn", text: "+ Add category" });
    addCat.addEventListener("click", () => { data.skills.push({ category: "New Category", items: ["New skill"] }); persist(); render(); });
    root.appendChild(addCat);
  }

  function renderProjects() {
    const root = document.getElementById("projects-content");
    root.innerHTML = "";
    data.projects.forEach((proj, i) => {
      const card = el("div", { class: "project-card" });
      const rm = el("button", { class: "remove-btn", html: "&times;" });
      rm.addEventListener("click", () => { data.projects.splice(i, 1); persist(); render(); });
      card.appendChild(rm);
      const thumb = el("div", { class: "project-thumb" });
      if (proj.image) {
        thumb.appendChild(el("img", { attrs: { src: proj.image, alt: proj.title } }));
      } else {
        thumb.appendChild(el("span", { class: "mono", text: `PROJ-${proj.id}` }));
      }
      card.appendChild(thumb);
      const imgField = el("div", { class: "image-field mono" });
      imgField.appendChild(el("span", { text: "image: " }));
      imgField.appendChild(editableSpan("span", "", proj.image || "(none — click to set a path)", (v) => {
        data.projects[i].image = v.includes("(none") ? "" : v;
      }));
      card.appendChild(imgField);
      card.appendChild(el("div", { class: "project-id mono", text: `PROJ-${proj.id}` }));
      card.appendChild(editableSpan("h3", "", proj.title, (v) => (data.projects[i].title = v)));
      card.appendChild(editableSpan("p", "", proj.description, (v) => (data.projects[i].description = v)));
      const tags = el("div", { class: "tech-tags" });
      proj.tech.forEach((t) => tags.appendChild(el("span", { class: "tech-tag mono", text: t })));
      card.appendChild(tags);
      card.appendChild(el("a", { class: "project-link mono", text: "View code →", attrs: { href: proj.link, target: "_blank" } }));
      root.appendChild(card);
    });
    const addCard = el("button", { class: "add-btn", text: "+ Add project" });
    addCard.addEventListener("click", () => {
      data.projects.push({ id: String(data.projects.length + 1).padStart(2, "0"), image: "", title: "New Project", description: "Description here.", tech: ["Tech"], link: "#" });
      persist(); render();
    });
    root.appendChild(addCard);
  }

  function renderTimeline() {
    const root = document.getElementById("timeline-content");
    root.innerHTML = "";
    data.timeline.forEach((item, i) => {
      const row = el("div", { class: "log-item" });
      const rm = el("button", { class: "remove-btn", html: "&times;" });
      rm.addEventListener("click", () => { data.timeline.splice(i, 1); persist(); render(); });
      row.appendChild(rm);
      row.appendChild(editableSpan("div", "log-date", item.date, (v) => (data.timeline[i].date = v)));
      row.appendChild(el("div", { class: `log-badge ${item.type}`, text: item.type === "work" ? "Work" : "Education" }));
      const body = el("div");
      body.appendChild(editableSpan("div", "log-title", item.title, (v) => (data.timeline[i].title = v)));
      body.appendChild(editableSpan("div", "log-org", item.org, (v) => (data.timeline[i].org = v)));
      body.appendChild(editableSpan("div", "log-desc", item.description, (v) => (data.timeline[i].description = v)));
      row.appendChild(body);
      root.appendChild(row);
    });
    const addRow = el("button", { class: "add-btn", text: "+ Add entry" });
    addRow.addEventListener("click", () => {
      data.timeline.unshift({ date: "Month Year", type: "work", title: "New Role", org: "Company", description: "Description here." });
      persist(); render();
    });
    root.appendChild(addRow);
  }

  function renderCertifications() {
    const root = document.getElementById("cert-content");
    root.innerHTML = "";
    data.certifications.forEach((c, i) => {
      const card = el("div", { class: "cert-card" });
      const rm = el("button", { class: "remove-btn", html: "&times;" });
      rm.addEventListener("click", () => { data.certifications.splice(i, 1); persist(); render(); });
      card.appendChild(rm);
      card.appendChild(editableSpan("h3", "", c.title, (v) => (data.certifications[i].title = v)));
      card.appendChild(editableSpan("div", "issuer", c.issuer, (v) => (data.certifications[i].issuer = v)));
      if (c.date) card.appendChild(el("div", { class: "date mono", text: c.date }));
      if (c.link) card.appendChild(el("a", { text: "View certificate →", attrs: { href: c.link, target: "_blank" } }));
      root.appendChild(card);
    });
    const addCert = el("button", { class: "add-btn", text: "+ Add certification" });
    addCert.addEventListener("click", () => {
      data.certifications.push({ title: "New Certification", issuer: "Issuer", date: "", link: "" });
      persist(); render();
    });
    root.appendChild(addCert);
  }

  function renderContact() {
    document.getElementById("contact-heading").textContent = data.contact.heading;
    document.getElementById("contact-blurb").textContent = data.contact.blurb;
    document.getElementById("contact-phone").textContent = data.contact.phone;
    document.getElementById("contact-email").textContent = data.contact.email;
    document.getElementById("contact-location").textContent = data.contact.location;
    document.getElementById("contact-linkedin").href = data.contact.linkedin;
    document.getElementById("contact-github").href = data.contact.github;
    document.getElementById("contactForm").action = data.contact.formAction;
  }

  function renderFooter() {
    document.getElementById("footer-text").textContent = `© ${new Date().getFullYear()} ${data.footer.text}`;
  }

  // ---------------- EDIT MODE ----------------

  function applyEditState() {
    document.querySelectorAll("[data-editable]").forEach((n) => {
      n.contentEditable = editMode;
    });
    document.body.classList.toggle("editing", editMode);
    document.querySelectorAll(".add-btn").forEach((b) => (b.style.display = editMode ? "block" : "none"));
    document.getElementById("editToggle").classList.toggle("active", editMode);
  }

  function initEditor() {
    const toggle = document.getElementById("editToggle");
    const toolbar = document.getElementById("editToolbar");
    toggle.addEventListener("click", () => {
      if (!editMode) {
        const pass = prompt("Enter edit passphrase:");
        if (pass !== data.settings.editPassphrase) {
          if (pass !== null) alert("Incorrect passphrase.");
          return;
        }
      }
      editMode = !editMode;
      toolbar.classList.toggle("show", editMode);
      applyEditState();
    });

    document.getElementById("saveLocalBtn").addEventListener("click", () => {
      persist();
      alert("Saved to this browser. Click \"Export content.js\" to make these changes visible to everyone who visits your live site.");
    });

    document.getElementById("exportBtn").addEventListener("click", exportContent);

    document.getElementById("resetBtn").addEventListener("click", () => {
      if (confirm("Discard local edits and reload the published content?")) {
        localStorage.removeItem(STORAGE_KEY);
        data = JSON.parse(JSON.stringify(PORTFOLIO_CONTENT));
        render();
      }
    });
  }

  function exportContent() {
    persist();
    const fileText = "const PORTFOLIO_CONTENT = " + JSON.stringify(data, null, 2) + ";\n";
    const blob = new Blob([fileText], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "content.js";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // ---------------- NAV / MISC ----------------

  function initNav() {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));
    document.querySelectorAll(".nav-links a").forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("active"))
    );
  }

  function initForm() {
    const form = document.getElementById("contactForm");
    const note = document.getElementById("formNote");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      try {
        const res = await fetch(form.action, { method: "POST", body: formData, headers: { Accept: "application/json" } });
        if (res.ok) {
          form.reset();
          note.style.display = "block";
          note.textContent = "Message sent — thank you!";
          setTimeout(() => (note.style.display = "none"), 4000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (err) {
        alert("There was a problem submitting the form. Please try again later.");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    render();
    initEditor();
    initNav();
    initForm();
  });
})();

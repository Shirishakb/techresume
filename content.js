/* ============================================================
   PORTFOLIO CONTENT
   ------------------------------------------------------------
   This is the ONLY file you should need to hand-edit.
   Everything on the site — bio, skills, jobs, certifications,
   projects — is pulled from the object below.

   HOW TO USE:
   1. You can also edit everything live on the site itself:
      click the pencil button in the bottom-right corner,
      enter your passphrase (set below), and edit/add/remove
      items directly on the page.
   2. When you're happy with your changes, click
      "Export content.js" in the edit toolbar. It downloads
      an updated version of THIS file.
   3. Replace this file in your GitHub repo (or Netlify site)
      with the downloaded one and push/redeploy. That's the
      only "code" step — everything else happens on the page.

   Editing this file by hand works too: it's just plain text.
   Keep the commas between items and the quote marks around text.
   ============================================================ */

const PORTFOLIO_CONTENT = {

  // Change this passphrase to anything you like — it's what
  // unlocks edit mode on the live site. Not high security,
  // just enough to stop random visitors from editing.
  settings: {
    editPassphrase: "shirisha2026"
  },

  meta: {
    title: "Shirisha Korukonda Bhattaru — QA Analyst & Full Stack Developer",
    favicon: "assets/favicon.png"
  },

  hero: {
    status: "OPEN TO WORK",
    role: "QA ANALYST",
    location: "WINSTON-SALEM, NC",
    name: "Shirisha Korukonda Bhattaru",
    // Shown as a large monogram instead of a photo — change these 2-3 letters if you like.
    initials: "SKB",
    tagline: "QA-focused engineer with a full stack development foundation and three years of banking operations experience. I test software the way I once balanced ledgers — line by line, nothing skipped."
  },

  about: {
    heading: "About",
    paragraphs: [
      "I move into tech from banking operations, where three years of daily reconciliation and 100% accuracy requirements built a habit of catching what others miss — the same instinct that now drives my QA work.",
      "I hold a Full Stack Web Development certification from the UNC Charlotte Boot Camp (React.js, Node.js, SQL) and a QA Testing certification from 9th Network Inc. I pair manual and exploratory testing with the ability to read and reason about the code under test.",
      "I hold a B.Tech in Electronics & Communications Engineering with distinction, and I'm fluent in English, Hindi, Telugu, and Bengali."
    ],
    // Quick facts shown in the identity card next to your bio (no photo needed).
    quickFacts: [
      { label: "Based in", value: "Winston-Salem, NC" },
      { label: "Focus", value: "QA Analyst / Jr. Software Engineer" },
      { label: "Languages", value: "English, Hindi, Telugu, Bengali" },
      { label: "Background", value: "Banking Ops + Full Stack Dev" }
    ],
    stats: [
      { value: "9.19", label: "Engineering GPA" },
      { value: "8+", label: "Projects Shipped" },
      { value: "3+", label: "Years Professional Experience" }
    ]
  },

  skills: [
    {
      category: "Testing & QA",
      items: ["Manual Testing", "Exploratory Testing", "Test Case Design", "Bug Tracking", "Regression Testing", "UAT Support"]
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap", "React Bootstrap"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "GraphQL", "Apollo Server", "Object-Oriented Programming"]
    },
    {
      category: "Data",
      items: ["SQL", "NoSQL", "MongoDB", "Oracle"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "JWT Authentication", "CI/CD Pipelines", "Excel", "Prompt Engineering"]
    }
  ],

  // Add a screenshot for any project by setting "image" to a path
  // like "assets/projects/wirefront.png" (upload the image to that
  // folder) or a full image URL. Leave it as "" for a plain placeholder.
  projects: [
    {
      id: "01",
      image: "pro.jpg",
      title: "Wirefront",
      description: "Web page mockup builder for rapid layout creation, with pre-built components for assembling website concepts quickly.",
      tech: ["React.js", "Python", "MongoDB", "JWT"],
      link: "https://github.com/Shirishakb/WIREFRONT"
    },
    {
      id: "02",
      image: "Screenshot 2026-08-03 191925.png",
      title: "Bookflix",
      description: "Full stack book and movie discovery app with secure authentication and live API search.",
      tech: ["React.js", "Node.js", "React Bootstrap", "CSS"],
      link: "https://github.com/JuanGirelli/Bookflix"
    },
    {
      id: "03",
      image: "KB.png",
      title: "Kanban Board",
      description: "Dynamic task board across To Do, In Progress, and Done stages, built to improve workflow visibility.",
      tech: ["React.js", "Node.js", "React Bootstrap", "CSS"],
      link: "https://github.com/Shirishakb/Kanban-Board"
    },
    {
      id: "04",
      image: "bankroll.png",
      title: "Bankroll",
      description: "Contract tracking app for financial analysts, supporting contract creation and budget forecasting.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/eslickjr/Bankroll"
    },
    {
      id: "05",
      image: "csp.jpg",
      title: "CodeSphere",
      description: "Real-time code-sharing platform for writing, editing, and sharing snippets collaboratively.",
      tech: ["React.js", "Node.js", "React Bootstrap", "CSS"],
      link: "https://github.com/Shirishakb/CodeSphere"
    },
    {
      id: "06",
      image: "weather-forecast.png",
      title: "Weather Forecast App",
      description: "Real-time weather lookup by location or search, built on a live weather API.",
      tech: ["React.js", "SQL", "Node.js", "React Bootstrap", "CSS"],
      link: "https://github.com/Shirishakb/Weather-forecast"
    },
    {
      id: "07",
      video: "https://www.loom.com/share/71cc87237d874341a35b626d58f70f78?sid=ac591530-eb6e-459d-92fb-559fdc90d916",
      title: "ThoughtShare",
      description: "Social platform for posting and engaging with short-form thoughts and ideas.",
      tech: ["React.js", "Node.js", "Express.js", "React Bootstrap", "CSS"],
      link: "https://github.com/Shirishakb/ThoughtShare"
    },
    {
      id: "08",
      image: "emp.png",
      title: "Employee Tracker",
      description: "Command-line app for managing employee records, roles, and departments against a SQL database.",
      tech: ["React.js", "Node.js", "SQL", "CSS"],
      link: "https://github.com/Shirishakb/Employee-Tracker"
    },
     {
        id:"09",
        image:"yaml1.png",
        title:"Github Actions",
        description:"GIVEN a fullstack application for a web developer,
WHEN I upload new features to the application
THEN I should be making Pull Requests to a develop branch first
WHEN I create a Pull Request to a develop branch
THEN I should be executing a GitHub Action that checks the Cypress component tests
WHEN I see that the tests pass on GitHub Action
THEN I should see those test results on GitHub Action and merge the code
WHEN I push the code from the develop branch to the main branch
THEN I should see that another GitHub Action triggers and should automatically deploy to Render,
   deployed url:"https://github-action-tests.onrender.com/"
}
  ],

  // type controls the small badge color: "work" or "education"
  timeline: [
    {
      date: "May 2025 — Present",
      type: "work",
      title: "Software QA Analyst (Contract)",
      org: "Info Bionic — Boston, MA (Remote)",
      description: "Tested a J2EE-based cardiac patient remote monitoring application (Java, JSP, HTML, Oracle), validating ECG, pulse, and SpO2 data used by clinicians."
    },
    {
      date: "Oct 2024 — Present",
      type: "work",
      title: "Hindi Interpreter (Full-time)",
      org: "LanguageLine Solutions — Winston-Salem, NC",
      description: "Providing real-time interpretation in healthcare, legal, and business settings, maintaining confidentiality and cultural accuracy under time pressure."
    },
    {
      date: "Jul 2024 — Feb 2025",
      type: "education",
      title: "Full Stack Web Development Certification",
      org: "UNC Charlotte Boot Camp",
      description: "Modern web development: HTML, CSS, JavaScript, React.js, Node.js, and SQL."
    },
    {
      date: "Nov 2020 — Nov 2023",
      type: "work",
      title: "Customer Service Associate",
      org: "Union Bank of India — Vizianagaram",
      description: "Managed daily banking operations, customer service, and cash handling with 100% accuracy; contributed to process improvements."
    },
    {
      date: "Jun 2014 — Jun 2018",
      type: "education",
      title: "B.Tech, Electronics & Communications Engineering",
      org: "Lendi Institute of Engineering and Technology",
      description: "Graduated with distinction, GPA 9.19."
    }
  ],

  certifications: [
    {
      title: "QA Testing Certification",
      issuer: "9th Network Inc",
      date: "April 2026",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7476339993326768128/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6Y9VT6TpRYCk3S7hqJH%2Fqg%3D%3D"
    },
    {
      title: "Full Stack Web Development",
      issuer: "UNC Charlotte Boot Camp",
      date: "February 2025",
      link: "https://www.linkedin.com/posts/korukonda-bhattaru-shirisha-656925326_im-happy-to-share-that-i-have-received-my-activity-7296505942567780352-qSgF"
    },
     {
        title:"Java Programming",
        isuer:"InternPe",
        date:"01/25/2026",
        link:"https://media.licdn.com/dms/image/v2/D4D22AQHvYXTM1pwS8g/feedshare-shrink_480/B4DZwBxO_5GgAs-/0/1769556209996?e=1787184000&v=beta&t=ykEP0j-gdpaJUfJsE_N6d0TOLQ7c6lXU1oOK20ZMNvs"
     },
     
    {
      title: "Digital Transformation with Google Cloud",
      issuer: "Simplilearn",
      date: "",
      link: "https://www.simplilearn.com/skillup-certificate-landing"
    }
  ],

  contact: {
    heading: "Get in touch",
    blurb: "Open to QA Analyst and Junior QA Engineer roles. Happy to talk about opportunities, collaborations, or your test strategy over coffee.",
    phone: "336-862-5961",
    email: "shirishakb@gmail.com",
    location: "Winston-Salem, NC 27107",
    linkedin: "https://www.linkedin.com/in/korukonda-bhattaru-shirisha-656925326/",
    github: "https://github.com/Shirishakb",
    formAction: "https://formspree.io/f/xanbdrgz"
  },

  footer: {
    text: "Shirisha Korukonda Bhattaru"
  }
};

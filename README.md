# techresume
# Shirisha's Portfolio

## Files
- `index.html` — page structure (you shouldn't need to touch this)
- `styles.css` — visual design (you shouldn't need to touch this)
- `app.js` — renders the page from content.js + powers edit mode (you shouldn't need to touch this)
- `content.js` — **your content lives here.** Skills, jobs, certifications, projects, bio, contact info — all of it.
- `assets/` — put your photos here (see below)

## 1. Adding images (repo: `qatechresume`, `main` branch)
You don't need a photo of yourself — the hero/about sections use your initials instead. But you can add project screenshots or any other images this way, straight from GitHub's website (no Git command line needed):

1. Go to your repo: `github.com/<your-username>/qatechresume`
2. Open the `assets` folder, then the `assets/projects` folder (or make a new folder by typing `assets/projects/yourfile.png` as the filename when uploading — GitHub creates the folder automatically).
3. Click **Add file → Upload files**, drag your image(s) in, and commit directly to `main`.
4. Note the path it now lives at, e.g. `assets/projects/wirefront.png`.

## 2. Showing a project image
For each project you want a screenshot on:
- **Easiest:** open your live site, click the pencil (bottom-right), unlock with your passphrase, and type the image path (e.g. `assets/projects/wirefront.png`) into the small "image:" field on that project's card. Click **Export content.js**, then upload that file to the repo to make it permanent.
- **Or by hand:** open `content.js`, find that project, and set `image: "assets/projects/wirefront.png"`.

Leave `image: ""` and that card just shows a plain placeholder — never a broken image.

## 3. Put it on GitHub Pages
1. In `qatechresume` → **Settings → Pages**.
2. Source: **Deploy from a branch**. Branch: `main`, folder: `/ (root)`. Save.
3. Your site goes live at `https://<your-username>.github.io/qatechresume/` within a minute or two.

Netlify works the same way if you ever switch — drag the folder into Netlify's "deploy manually" box, or connect the GitHub repo.

## 4. Update your content — two ways

**A. Edit directly on the live site (no code needed)**
1. Open your live site.
2. Click the pencil button, bottom-right.
3. Enter your passphrase (set in `content.js` → `settings.editPassphrase`, default is `shirisha2026` — change this to something only you know).
4. Click any underlined text to edit it in place. Use "+ Add" buttons to add skills, projects, jobs, or certifications. Use the small × on a card to remove it.
5. Click **Save (this browser)** to preview your changes — they'll persist on your own device/browser only at this point.
6. When you're happy, click **Export content.js**. This downloads an updated `content.js` file.
7. Upload that file to your GitHub repo (replacing the old one) and it's live for everyone. On GitHub.com you can do this by opening the file and using the pencil/edit icon there, or dragging the new file in via "Add file → Upload files."

*Why the export step:* GitHub Pages and Netlify serve static files — there's no database behind them, so nothing you type in a browser can permanently save itself. The export step is the one moment you touch GitHub, and it's just a file swap, not code editing.

**B. Edit `content.js` by hand**
It's plain text with comments — open it in any text editor, change the words between the quote marks, keep the commas. Useful for bigger rewrites.

## Notes
- The site is fully mobile-responsive — text, buttons, cards, and the nav menu all adapt down to phone widths.
- The contact form uses your existing Formspree endpoint — no changes needed there.
- Colors, fonts, and layout live in `styles.css` if you ever want a designer (or Claude) to adjust the look.

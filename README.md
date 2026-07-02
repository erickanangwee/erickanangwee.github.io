# Erick Anangwe — Portfolio

Plain HTML/CSS/JS portfolio site. No build step, no framework — deploy as-is to GitHub Pages.

## 1. Before you publish

- [ ] Replace `assets/profile.jpg` with your real photo (square-ish, at least 640x640px works well)
- [ ] Replace `assets/Erick_Anangwe_Resume.pdf` with your real résumé PDF
- [ ] In `index.html`, update the `mailto:`, LinkedIn, GitHub, and Medium links in the Contact section
- [ ] In `projects.json`, replace the 6 placeholder entries with real projects (or delete them)
- [ ] In `experience.json`, fill in any additional roles

## 2. Deploy to GitHub Pages

1. Create a new repo on GitHub named exactly `your-username.github.io`
2. Push this folder's contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, and under "Build and deployment" set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Your site goes live at `https://your-username.github.io/` within a minute or two.

## 3. Adding a new project later (this is the whole workflow)

Open `projects.json` and add a new object to the array, e.g.:

```json
{
  "title": "My New Project",
  "date": "2026-07",
  "description": "One or two sentences on what it does and how you built it.",
  "tags": ["Python", "Docker"],
  "link": "https://your-demo-url.com",
  "repo": "https://github.com/your-username/your-repo"
}
```

Commit and push — that's it. No HTML editing, no rebuild. The site re-sorts projects by date automatically (newest first).

Same pattern works for `experience.json` (add a role) and `skills.json` (add a tool to a category, or a new category).

## File overview

```
index.html        Page structure (rarely needs editing)
style.css         All styling / design tokens at the top
script.js         Reads the JSON files and renders cards
projects.json     Your projects — edit this most often
experience.json   Your work history
skills.json       Your tools, grouped by category
assets/           Photo + resume PDF
```

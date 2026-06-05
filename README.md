# 🐱 DSA Journey — Daily C++ Tracker

A beautiful, lively calendar website to track your daily DSA practice with glitter cursors, motivational cat, streaks, and topic notes!

---

## 📁 Project Structure

```
dsa-journey/
├── index.html        ← Main page
├── css/
│   └── style.css     ← All styles
├── js/
│   └── app.js        ← All logic
└── README.md
```

---

## 🚀 Option 1 — Run Locally (VS Code)

1. Open the `dsa-journey/` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel
3. Right-click `index.html` → **"Open with Live Server"**
4. Site opens at `http://127.0.0.1:5500` 🎉

---

## 🌐 Option 2 — Deploy FREE on GitHub Pages (others can use it!)

### Step 1 — Create a GitHub repo
1. Go to [github.com](https://github.com) → New repository
2. Name it `dsa-journey` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Push your code
In the `dsa-journey/` folder, open a terminal:

```bash
git init
git add .
git commit -m "🐱 Initial DSA Journey site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dsa-journey.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select `main` branch → `/ (root)`
4. Click **Save**

Your site will be live at:
**`https://YOUR_USERNAME.github.io/dsa-journey/`** 🎉

Share this link with anyone! They'll each get their own localStorage data.

---

## 🌐 Option 3 — Deploy on Netlify (instant, no config)

1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag & drop the entire `dsa-journey/` folder onto the Netlify dashboard
3. Get an instant URL like `https://random-name.netlify.app`
4. (Optional) Connect your GitHub repo for auto-deploy on push

---

## 🌐 Option 4 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up free with GitHub
2. Click **New Project** → Import your `dsa-journey` repo
3. Framework: **Other** (plain HTML)
4. Click **Deploy** → Get your URL instantly!

---

## ✨ Features

- 📅 **Month calendar** — navigate past & future months
- ✅ **Check-in toggle** — click any day to mark DSA done/undone
- 📝 **Daily notes** — optionally add what topics you covered
- 🔥 **Streak counter** — tracks consecutive days
- 📊 **Stats bar** — streak, total days, this month, consistency %
- 🐱 **Motivational cat** — changes message based on your streak
- ✨ **Glitter cursor** — sparkles follow your mouse everywhere
- 📚 **Topic tracker** — 22 C++ DSA topics to mark as covered
- 💾 **Auto-saves** — all data in localStorage (per browser)
- 🎊 **Confetti** — shoots when you mark a day done!

---

## 💡 Tips

- Data is saved per-browser using `localStorage` — different users get their own data automatically
- The 📝 emoji on calendar cells shows days that have notes
- You can log past days too — just navigate to that month and click
- Topics you mark stay saved across sessions

---

## 🎨 Customization

Want to change the color scheme or cat messages? Open `js/app.js` and edit:
- `catPool` array — change the motivational messages
- `TOPICS` array — add/remove DSA topics
- `css/style.css` `:root` section — tweak colors

Happy coding! 💜 Keep showing up every day!

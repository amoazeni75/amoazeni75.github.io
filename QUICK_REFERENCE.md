# Quick Reference Guide

## 🚀 Common Tasks

### Start Local Server
```bash
./serve.sh
```
**URL:** http://localhost:4000

### Stop Server
Press `Ctrl + C`

### Deploy to GitHub
```bash
git add .
git commit -m "Your message"
git push origin master
```

---

## 📝 What File to Edit?

| I want to... | Edit this file |
|-------------|---------------|
| Change my name or email | `_config.yml` |
| Update my bio | `index.md` |
| Change profile picture | `assets/img/prof_pic.jpg` |
| Add a publication | `_pages/publications.md` |
| Update my CV | `_data/cv.yml` |
| Add news | Create `_news/announcement_N.md` |
| Add social media links | `_config.yml` |
| Change theme color | `_config.yml` |

---

## 🔗 Important Links

- **Live Site:** https://amoazeni75.github.io
- **GitHub Repo:** https://github.com/amoazeni75/amoazeni75.github.io
- **Build Status:** https://github.com/amoazeni75/amoazeni75.github.io/actions
- **Full Documentation:** [DOCUMENTATION.md](DOCUMENTATION.md)

---

## 📂 Directory Structure (Quick View)

```
Your Site/
├── _config.yml           ← Site settings
├── index.md              ← Homepage
├── _pages/               ← Other pages
│   ├── publications.md   ← Publications page
│   └── cv.md             ← CV page
├── _data/
│   └── cv.yml            ← CV content
├── _news/                ← News items
├── assets/
│   ├── img/              ← Images
│   └── pdf/              ← PDF files
└── serve.sh              ← Run local server
```

---

## ⚡ Quick Commands

```bash
# Start server
./serve.sh

# Build only (no server)
bundle exec jekyll build

# Clean build files
bundle exec jekyll clean

# Update dependencies
bundle update

# Check for errors
bundle exec jekyll build --trace
```

---

## 🎯 Common File Formats

### News Announcement (_news/announcement.md)
```markdown
---
layout: post
date: 2024-01-15 15:59:00-0000
inline: true
---
Your news here!
```

### New Page (_pages/mypage.md)
```markdown
---
layout: page
permalink: /mypage/
title: My Page
nav: true
nav_order: 4
---
Your content here...
```

### CV Entry (_data/cv.yml)
```yaml
- title: Section Name
  type: time_table
  contents:
    - title: Position
      institution: Organization
      year: 2020-2021
      description:
        - Point 1
        - Point 2
```

---

## 🆘 Troubleshooting Quick Fixes

### Server won't start?
```bash
rm -rf _site .jekyll-cache
./serve.sh
```

### Changes not showing?
1. Hard refresh: `Cmd + Shift + R` (Mac)
2. Clear cache: `rm -rf _site`
3. Restart server

### Port already in use?
```bash
bundle exec jekyll serve --port 4001
```

### GitHub deployment failed?
1. Check [Actions tab](https://github.com/amoazeni75/amoazeni75.github.io/actions)
2. Click failed workflow to see error
3. Fix error and push again

---

## ✅ Before Publishing Checklist

- [ ] Test locally (`./serve.sh`)
- [ ] Check all links work
- [ ] Verify images display correctly
- [ ] Proofread text content
- [ ] Commit with clear message
- [ ] Push to GitHub
- [ ] Wait for green checkmark in Actions
- [ ] Check live site

---

## 📞 Need More Help?

→ See [DOCUMENTATION.md](DOCUMENTATION.md) for detailed guides
→ Check [al-folio docs](https://github.com/alshedivat/al-folio)
→ Review terminal errors for clues

---

**Pro Tip:** Keep this file open in a tab for quick reference! 🎯


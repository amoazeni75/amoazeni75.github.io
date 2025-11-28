# Alireza Moazeni - Website Documentation

Complete guide for managing and updating your personal academic website.

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Running Locally](#running-locally)
3. [Site Structure](#site-structure)
4. [Making Changes](#making-changes)
5. [Adding Content](#adding-content)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)
8. [Advanced Customization](#advanced-customization)

---

## 🚀 Quick Start

### View Your Live Site
- **Live URL:** https://amoazeni75.github.io
- **GitHub Repository:** https://github.com/amoazeni75/amoazeni75.github.io

### Run Locally
```bash
cd /Users/samp8/Projects/amoazeni75.github.io
./serve.sh
```
Then open http://localhost:4000 in your browser.

---

## 💻 Running Locally

### Option 1: Using the Helper Script (Recommended)
```bash
./serve.sh
```

### Option 2: Manual Command
```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
export PATH="/opt/homebrew/lib/ruby/gems/3.4.0/bin:$PATH"
bundle exec jekyll serve
```

### With Live Reload (auto-refresh on changes)
```bash
bundle exec jekyll serve --livereload
```

### Stop the Server
Press `Ctrl + C` in the terminal.

### View Different Versions
- **Development:** http://localhost:4000
- **Production:** https://amoazeni75.github.io

---

## 📁 Site Structure

```
amoazeni75.github.io/
├── _config.yml              # Main site configuration
├── index.md                 # Homepage
├── Gemfile                  # Ruby dependencies
├── serve.sh                 # Helper script to run locally
│
├── _pages/                  # Additional pages
│   ├── publications.md      # Publications page
│   ├── cv.md                # CV page
│   └── repositories.md      # GitHub repositories page
│
├── _data/                   # Data files
│   ├── cv.yml               # CV content (education, experience, etc.)
│   └── repositories.yml     # GitHub repos to showcase
│
├── _bibliography/           # Publications in BibTeX format
│   └── papers.bib           # Your research papers
│
├── _news/                   # News announcements
│   ├── announcement_1.md
│   ├── announcement_2.md
│   └── announcement_3.md
│
├── assets/                  # Static assets
│   ├── img/                 # Images
│   │   ├── prof_pic.jpg     # Profile picture
│   │   └── *.jpg            # Other images
│   └── pdf/                 # PDF files (CV, papers, etc.)
│
├── .github/                 # GitHub Actions
│   └── workflows/
│       └── deploy.yml       # Auto-deployment workflow
│
└── backup/                  # Backup of old site
```

---

## ✏️ Making Changes

### Edit Site Information

**File:** `_config.yml`

```yaml
# Personal Information
title: Alireza Moazeni
first_name: S.Alireza
last_name: Moazeni
email: amoazeni@sfu.ca

# Social Media
github_username: amoazeni75
twitter_username: Moazeni_Alireza
linkedin_username: s-alireza-moazeni

# Site Settings
url: https://amoazeni75.github.io
description: >
  Your site description here
```

After editing, save and refresh your browser (if running locally).

### Edit Homepage Content

**File:** `index.md`

```markdown
---
layout: about
title: about
permalink: /
subtitle: Ph.D. Candidate in Computer Science
---

Write your bio here...
```

### Update Profile Picture

1. Replace the file: `assets/img/prof_pic.jpg`
2. Recommended size: 400x400 pixels or larger
3. Supported formats: JPG, PNG

### Change Theme Color

**File:** `_config.yml`

```yaml
# Look for theme colors - currently using default purple
# Search for "theme" settings in the config
```

---

## 📝 Adding Content

### Add a New Publication

**File:** `_bibliography/papers.bib`

Add a new BibTeX entry:

```bibtex
@inproceedings{yourpaper2024,
  abbr={Conference},
  title={Your Paper Title},
  author={Author1 and Moazeni, Alireza and Author2},
  booktitle={Conference Name},
  year={2024},
  pdf={https://link-to-paper.pdf},
  code={https://github.com/username/repo},
  website={https://project-page.com},
  selected={true},
  abstract={Your abstract here...}
}
```

**Or manually in:** `_pages/publications.md`

```markdown
### 2024

**Your Paper Title**  
Author1, **Alireza Moazeni**, Author2  
*Conference Name* - **Award** (if any)  
[[Paper]](link) [[Code]](link) [[Project]](link)

Brief description...
```

### Add a News Item

Create a new file: `_news/announcement_N.md`

```markdown
---
layout: post
date: 2024-01-15 15:59:00-0000
inline: true
related_posts: false
---

Your news announcement here! Keep it brief.
```

News items appear on the homepage automatically.

### Update Your CV

**File:** `_data/cv.yml`

```yaml
- title: Education
  type: time_table
  contents:
    - title: Ph.D. in Computer Science
      institution: Simon Fraser University
      year: 2021 - Present
      description:
        - Your research focus
        - Advisor information

- title: Experience
  type: time_table
  contents:
    - title: Position Title
      institution: Organization Name
      year: 2020 - 2021
      description:
        - Responsibility 1
        - Responsibility 2
```

### Add a New Page

1. Create file: `_pages/yourpage.md`

```markdown
---
layout: page
permalink: /yourpage/
title: Your Page
description: Page description
nav: true
nav_order: 4
---

Your content here...
```

2. It will automatically appear in the navigation menu if `nav: true`

### Add a PDF (CV, Papers, etc.)

1. Place PDF in: `assets/pdf/`
2. Link to it: `[Download PDF](/assets/pdf/yourfile.pdf)`

Example for CV:
```markdown
---
layout: cv
permalink: /cv/
title: cv
cv_pdf: your_cv.pdf  # Place in assets/pdf/
---
```

---

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

Your site automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

1. GitHub Actions will automatically build your site
2. Check progress: https://github.com/amoazeni75/amoazeni75.github.io/actions
3. Wait for green checkmark (usually 2-5 minutes)
4. Visit: https://amoazeni75.github.io

### Manual Deployment Check

1. Go to repository Settings → Pages
2. Ensure:
   - Source: **GitHub Actions**
   - Branch is deployed from workflow

### Force Rebuild

If your site isn't updating:

1. Go to Actions tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow" → "Run workflow"

---

## 🔧 Troubleshooting

### Server Won't Start

**Problem:** SSL certificate errors

**Solution:**
```bash
export SSL_CERT_FILE=/opt/homebrew/etc/openssl@3/cert.pem
bundle install
```

**Problem:** Port 4000 already in use

**Solution:**
```bash
bundle exec jekyll serve --port 4001
```

### Changes Not Showing

**Locally:**
1. Stop server (Ctrl+C)
2. Clear cache: `rm -rf _site .jekyll-cache`
3. Restart: `./serve.sh`
4. Hard refresh browser: `Cmd + Shift + R` (Mac) or `Ctrl + F5` (Windows)

**On GitHub Pages:**
1. Wait 5-10 minutes after pushing
2. Check Actions tab for build status
3. Clear browser cache
4. Try incognito/private browsing mode

### Build Errors

**Check logs:**
```bash
bundle exec jekyll build --trace
```

**Common issues:**
- Syntax errors in YAML files (check indentation)
- Missing required fields in front matter
- Invalid dates in news announcements

### Images Not Displaying

**Check:**
1. File path is correct (case-sensitive)
2. File is in `assets/img/` directory
3. File format is supported (jpg, png, gif)
4. File isn't too large (< 5MB recommended)

### Ruby/Bundle Issues

**Reinstall dependencies:**
```bash
rm -rf vendor/bundle
rm Gemfile.lock
bundle install
```

**Use system Ruby (not recommended but works):**
```bash
bundle install --path vendor/bundle
bundle exec jekyll serve
```

---

## 🎨 Advanced Customization

### Enable Dark Mode

**File:** `_config.yml`

```yaml
enable_darkmode: true  # Adds light/dark toggle
```

### Add Google Analytics

**File:** `_config.yml`

```yaml
google_analytics: G-XXXXXXXXXX  # Your GA measurement ID
enable_google_analytics: true
```

### Customize Navigation

**File:** Each page's front matter

```yaml
---
nav: true           # Show in navigation
nav_order: 1        # Order in nav (lower = earlier)
---
```

### Add More Social Links

**File:** `_config.yml`

```yaml
scholar_userid: your_google_scholar_id
orcid_id: your_orcid_id
research_gate_profile: your_researchgate
```

### Modify Theme Colors

The theme uses CSS variables. To customize:

1. Create file: `assets/css/custom.css`
2. Add custom styles:

```css
:root {
  --global-theme-color: #8B5CF6;  /* Purple */
  --global-hover-color: #7C3AED;
}
```

3. Reference in `_config.yml` or layout files

### Enable Blog Posts

1. Create `_posts/` directory
2. Add posts: `_posts/YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: Your Post Title
date: 2024-01-15
description: Brief description
tags: machine-learning, research
---

Your post content...
```

### Add Projects

1. Create `_projects/` directory
2. Add project files: `_projects/project-name.md`

```markdown
---
layout: page
title: Project Name
description: Brief description
img: assets/img/project-thumb.jpg
importance: 1
category: research
---

Project details...
```

---

## 📚 Resources

### Jekyll Documentation
- **Jekyll Docs:** https://jekyllrb.com/docs/
- **Liquid Syntax:** https://shopify.github.io/liquid/

### Al-Folio Theme
- **GitHub:** https://github.com/alshedivat/al-folio
- **Demo Site:** https://alshedivat.github.io/al-folio/
- **Issues/Help:** https://github.com/alshedivat/al-folio/issues

### Markdown Guide
- **Basic Syntax:** https://www.markdownguide.org/basic-syntax/
- **Extended Syntax:** https://www.markdownguide.org/extended-syntax/

### BibTeX Format
- **Guide:** http://www.bibtex.org/Format/
- **Entry Types:** https://en.wikipedia.org/wiki/BibTeX#Entry_types

---

## 🆘 Getting Help

### Check Build Logs
```bash
bundle exec jekyll build --verbose
```

### Common Commands Reference

```bash
# Start local server
./serve.sh

# Build site without server
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean

# Update dependencies
bundle update

# Check Jekyll version
bundle exec jekyll --version

# Validate HTML
bundle exec jekyll doctor
```

### Important Files to NEVER Delete
- `_config.yml` - Site configuration
- `Gemfile` - Dependencies
- `index.md` - Homepage
- `.github/workflows/deploy.yml` - Auto-deployment

### Files Safe to Modify
- Any file in `_pages/`
- Any file in `_data/`
- Any file in `_news/`
- Any file in `assets/`
- `_config.yml` (with care)

---

## ✅ Best Practices

### Before Pushing to GitHub

1. **Test locally:** Always preview changes locally first
2. **Check build:** Run `bundle exec jekyll build` to ensure no errors
3. **Commit messages:** Write clear, descriptive commit messages
4. **Small commits:** Commit related changes together

### Content Guidelines

1. **Images:** Optimize images before uploading (use tools like TinyPNG)
2. **File names:** Use lowercase with hyphens (e.g., `my-paper.pdf`)
3. **URLs:** Use relative URLs when linking to your own content
4. **Dates:** Use ISO format: `YYYY-MM-DD`

### Regular Maintenance

1. **Update dependencies:** Run `bundle update` monthly
2. **Backup:** Keep `backup/` folder with old site
3. **Git commits:** Commit changes regularly
4. **Check live site:** Verify after each deployment

---

## 📧 Questions?

If you encounter issues not covered here:

1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Search [al-folio issues](https://github.com/alshedivat/al-folio/issues)
3. Review build logs in GitHub Actions
4. Check terminal output when running locally

---

## 📝 Quick Reference

### File Locations Cheat Sheet

| What to Update | File Location |
|---------------|---------------|
| Profile picture | `assets/img/prof_pic.jpg` |
| Bio/Homepage | `index.md` |
| Site config (email, social) | `_config.yml` |
| Publications | `_pages/publications.md` or `_bibliography/papers.bib` |
| CV content | `_data/cv.yml` |
| News | `_news/announcement_N.md` |
| New page | `_pages/pagename.md` |
| PDFs | `assets/pdf/` |

### Command Cheat Sheet

```bash
# Start server
./serve.sh

# Start with live reload
bundle exec jekyll serve --livereload

# Build only (no server)
bundle exec jekyll build

# Clean build
bundle exec jekyll clean

# Update gems
bundle update

# Install new gems
bundle install
```

---

**Last Updated:** November 28, 2024  
**Theme:** al-folio  
**Jekyll Version:** 4.4.1  
**Ruby Version:** 3.4.7


# Alireza Moazeni - Personal Academic Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Famoazeni75.github.io)](https://amoazeni75.github.io)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Personal academic website built with Jekyll and the [al-folio](https://github.com/alshedivat/al-folio) theme.

🌐 **Live Site:** [https://amoazeni75.github.io](https://amoazeni75.github.io)

---

## 🚀 Quick Start

### Run Locally

```bash
./serve.sh
```

Then visit http://localhost:4000 in your browser.

**Alternative method:**
```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve --livereload
```

---

## 📝 Making Changes

### Update Profile
- **Picture:** Replace `assets/img/prof_pic.jpg`
- **Bio:** Edit `index.md`
- **Contact:** Edit `_config.yml`

### Add Publications
Edit `_pages/publications.md` or `_bibliography/papers.bib`

### Update CV
Edit `_data/cv.yml`

### Add News
Create new file in `_news/` directory

---

## 📚 Documentation

**For complete documentation, see [DOCUMENTATION.md](DOCUMENTATION.md)**

Topics covered:
- Site structure
- Adding content (publications, news, projects)
- Customization options
- Troubleshooting
- Deployment

---

## 🛠️ Technical Details

- **Framework:** Jekyll 4.4.1
- **Theme:** [al-folio](https://github.com/alshedivat/al-folio)
- **Deployment:** GitHub Actions (automatic)
- **Ruby Version:** 3.4.7

---

## 📁 Repository Structure

```
├── _config.yml          # Site configuration
├── index.md             # Homepage
├── _pages/              # Additional pages
├── _data/               # Data files (CV, etc.)
├── _bibliography/       # Publications (BibTeX)
├── _news/              # News announcements
├── assets/             # Images, PDFs, CSS
└── .github/workflows/  # Auto-deployment
```

---

## 🚀 Deployment

### Automatic (Recommended)
Push to master branch - GitHub Actions handles the rest!

```bash
git add .
git commit -m "Update content"
git push origin master
```

Check deployment status: [Actions](https://github.com/amoazeni75/amoazeni75.github.io/actions)

### Manual Build
```bash
bundle exec jekyll build
```

---

## 📧 Contact

**Alireza Moazeni**
- Email: amoazeni@sfu.ca
- GitHub: [@amoazeni75](https://github.com/amoazeni75)
- LinkedIn: [s-alireza-moazeni](https://www.linkedin.com/in/s-alireza-moazeni/)
- Twitter: [@Moazeni_Alireza](https://twitter.com/Moazeni_Alireza)

---

## 📄 License

This project uses the [al-folio](https://github.com/alshedivat/al-folio) theme, which is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Theme: [al-folio](https://github.com/alshedivat/al-folio) by Maruan Al-Shedivat
- Built with: [Jekyll](https://jekyllrb.com/)
- Hosted on: [GitHub Pages](https://pages.github.com/)


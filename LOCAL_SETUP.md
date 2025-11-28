# Local Development Setup

There are several ways to run your Jekyll site locally. Choose the option that works best for you:

## Option 1: Using Docker (Easiest - Recommended)

If you have Docker installed, this is the simplest method:

```bash
cd /Users/samp8/Projects/amoazeni75.github.io

# Run Jekyll in a Docker container
docker run --rm -it \
  -v "$PWD:/srv/jekyll" \
  -p 4000:4000 \
  jekyll/jekyll:4.3 \
  jekyll serve --force_polling --livereload
```

Then visit: http://localhost:4000

## Option 2: Install Ruby via Homebrew (Recommended for long-term)

The system Ruby on macOS has limitations. Install a modern Ruby version:

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ruby
brew install ruby

# Add Ruby to your PATH (add this to your ~/.zshrc)
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Verify Ruby installation
which ruby
ruby -v

# Now install dependencies
cd /Users/samp8/Projects/amoazeni75.github.io
bundle install

# Run the site
bundle exec jekyll serve --livereload
```

Then visit: http://localhost:4000

## Option 3: Using rbenv (Alternative Ruby version manager)

```bash
# Install rbenv via Homebrew
brew install rbenv ruby-build

# Initialize rbenv
rbenv init
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc

# Install Ruby 3.2.2
rbenv install 3.2.2
rbenv global 3.2.2

# Verify installation
ruby -v

# Install dependencies
cd /Users/samp8/Projects/amoazeni75.github.io
bundle install

# Run the site
bundle exec jekyll serve --livereload
```

Then visit: http://localhost:4000

## Option 4: Quick Preview Using GitHub Codespaces (No local install needed)

1. Go to your GitHub repository: https://github.com/amoazeni75/amoazeni75.github.io
2. Click the green "Code" button
3. Click "Codespaces" tab
4. Click "Create codespace on master"
5. Wait for the environment to load
6. In the terminal that opens, run:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
7. Codespaces will give you a URL to preview

## Troubleshooting

### SSL Certificate Errors
If you see SSL certificate errors, you can temporarily bypass them (not recommended for production):

```bash
export SSL_CERT_FILE=/etc/ssl/cert.pem
bundle install
```

### Port Already in Use
If port 4000 is already in use:

```bash
bundle exec jekyll serve --port 4001
```

### Live Reload Not Working
Try serving without livereload:

```bash
bundle exec jekyll serve
```

## Making Changes

Once the server is running:
1. Edit any file in your repository
2. The site will automatically rebuild (watch the terminal)
3. Refresh your browser to see changes
4. Press `Ctrl+C` to stop the server

## Important Files to Edit

- `_config.yml` - Main site configuration
- `index.md` - Homepage content
- `_pages/*.md` - Individual pages
- `_bibliography/papers.bib` - Publications
- `_data/cv.yml` - CV data
- `_news/*.md` - News announcements


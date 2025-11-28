#!/bin/bash
# Helper script to run Jekyll locally

# Set up Ruby path
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
export PATH="/opt/homebrew/lib/ruby/gems/3.4.0/bin:$PATH"

echo "Starting Jekyll development server..."
echo "Your site will be available at: http://localhost:4000"
echo "Press Ctrl+C to stop the server."
echo ""

# Run Jekyll
cd "$(dirname "$0")"
bundle exec jekyll serve --livereload


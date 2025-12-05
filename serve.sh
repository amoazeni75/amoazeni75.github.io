#!/bin/bash
# Helper script to run Jekyll locally

# Set up Ruby path
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
export PATH="/opt/homebrew/lib/ruby/gems/3.4.0/bin:$PATH"

OFFLINE=0

echo "Checking connectivity..."
if ! curl -I https://github.com -m 3 -s -f > /dev/null; then
    OFFLINE=1
    echo "⚠️  Offline detected: will try to use cached theme and assets."
    # Hint jekyll-remote-theme to prefer cache if available
    export JEKYLL_REMOTE_THEME_CACHE=1
else
    echo "Online. Using remote theme normally."
fi

echo "Starting Jekyll development server..."
echo "Your site will be available at: http://localhost:4000"
echo "Press Ctrl+C to stop the server."
echo ""

# Change to script directory
cd "$(dirname "$0")"

# Function to check if error is related to remote theme download
is_remote_theme_error() {
    local output="$1"
    echo "$output" | grep -qi "remote.*theme\|SSL_connect\|Connection reset\|ECONNRESET" || return 1
    return 0
}

# Try to build first to catch errors early
echo "Building site..."
BUILD_OUTPUT=$(bundle exec jekyll build 2>&1)
BUILD_EXIT_CODE=$?

if [ $BUILD_EXIT_CODE -ne 0 ]; then
    if [ $OFFLINE -eq 1 ]; then
        echo ""
        echo "❌ Build failed while offline."
        echo "Make sure the remote theme is cached locally (.jekyll-cache/remote-themes)."
        echo "Options:"
        echo "1) Connect to the internet and rerun ./serve.sh"
        echo "2) Remove remote_theme from _config.yml temporarily to build without it"
        echo "3) Manually download the theme into the cache"
        exit $BUILD_EXIT_CODE
    fi

    if is_remote_theme_error "$BUILD_OUTPUT"; then
        echo ""
        echo "⚠️  Warning: Network error while downloading remote theme."
        echo "Attempting to use cached theme (if available)..."
        echo ""
        
        # Retry with exponential backoff
        MAX_RETRIES=3
        RETRY_DELAY=2
        
        for i in $(seq 1 $MAX_RETRIES); do
            if [ $i -gt 1 ]; then
                echo "Retry attempt $((i-1)) of $MAX_RETRIES..."
                sleep $RETRY_DELAY
                RETRY_DELAY=$((RETRY_DELAY * 2))
            fi
            
            # Try building again - jekyll-remote-theme should use cache if available
            RETRY_OUTPUT=$(bundle exec jekyll build 2>&1)
            RETRY_EXIT_CODE=$?
            
            if [ $RETRY_EXIT_CODE -eq 0 ]; then
                echo "✓ Build successful using cached theme!"
                break
            else
                if [ $i -eq $MAX_RETRIES ]; then
                    echo ""
                    echo "❌ Error: Failed to build after $MAX_RETRIES attempts."
                    echo ""
                    echo "Last error output:"
                    echo "$RETRY_OUTPUT" | tail -20
                    echo ""
                    echo "Troubleshooting options:"
                    echo "1. Check your internet connection and try again"
                    echo "2. Clear cache and rebuild:"
                    echo "   rm -rf .jekyll-cache _site"
                    echo "   ./serve.sh"
                    echo "3. Check if GitHub is accessible:"
                    echo "   curl -I https://github.com"
                    echo "4. If offline, you may need to download the theme manually"
                    exit 1
                fi
            fi
        done
    else
        # Other build errors - show them
        echo "$BUILD_OUTPUT"
        exit $BUILD_EXIT_CODE
    fi
fi

# If build succeeded, start the server
echo "✓ Build successful. Starting server..."
bundle exec jekyll serve --livereload


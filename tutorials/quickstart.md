# Quick Start

## Git Checkout

1. You can checkout the project from [Github](https://github.com/dpkwhan/docs).

1. Additional plugins can be added to your `index.html`:

   ```html
   <!-- docsify (also available on jsdelivr.com -->
   <script src="https://unpkg.com/docsify/lib/docsify.min.js"></script>

   <!-- docsify-themeable -->
   <script src="https://unpkg.com/docsify-themeable"></script>
   ```

## Local Preview

Previewing the doc site locally requires serving your files from a web server.

1. If you have ``node`` and ``npm`` installed on your machine, the following steps can be used to launch a web server.

```bash
# Install docsify-cli globally
npm install -g docsify-cli

# Serve current directory
docsify serve

# Serve ./docs directory
docsify serve docs
```

2. A simple [Python](https://www.python.org/) web server can also be used:

```bash
# Change to site directory
cd /path/to/docs

# Show Python version
python --version

# Launch web server (Python 2.x)
python -m SimpleHTTPServer

# Launch web server (Python 3.x)
python -m http.server
```
# Quick Start

## Git Checkout

1. [Create a docsify site](//docsify.js.org/#/quickstart) by following the instructions on the [docsify.js](//docsify.js.org) website.

1. Add the docsify-themeable plugin `<script>` to your `index.html`:

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

## Markdown Examples

### Math

The mathematical formula and symbols are powered by $\KaTeX$, the fastest math typesetting library for the web. An example of inline Tex is $x^2+y^2=z^2$ and a display math formula:

$$y=\alpha + \beta^\prime X + \epsilon$$

and a system of equations:

$$\begin{alignedat}{2}10&x+&3&y=2\\3&x+&13&y=4\end{alignedat}$$

For a full list of TeX functions supported by KaTeX, see [Supported functions](https://upupming.site/docsify-katex/docs/#/supported).

### Ordered list
1. Step one
1. Step two

### Unordered list
- This is an unordered list
- Another element

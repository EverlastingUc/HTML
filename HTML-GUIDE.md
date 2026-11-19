# The Complete HTML Guide

A practical course from absolute beginner to confident HTML author. Work through the sections in order and type the examples yourself.

## Contents

1. What HTML is
2. HTML, CSS and JavaScript
3. Your first HTML document
4. Tags, elements and attributes
5. Nesting, void elements and comments
6. Document structure
7. Text and headings
8. Links and paths
9. Images and responsive images
10. Lists
11. Tables
12. Forms and validation
13. Semantic HTML
14. Audio, video and iframe
15. Metadata and SEO
16. Accessibility
17. Modern HTML elements
18. SVG and canvas
19. Security and performance
20. Validation and debugging
21. Best practices
22. Learning roadmap and glossary

---

## 1. What is HTML?

**HTML** stands for **HyperText Markup Language**.

- **HyperText** is text connected to other documents through links.
- **Markup** means adding labels that describe the structure and meaning of content.
- **Language** means it follows defined syntax and rules.

HTML is the standard markup language for describing web documents. A browser reads HTML, builds a Document Object Model (DOM), and renders the page.

HTML describes headings, paragraphs, links, images, lists, tables, forms, media and semantic page regions.

HTML is **not a general-purpose programming language**. It does not provide general-purpose loops, variables or algorithms. CSS normally controls appearance; JavaScript adds programmable behavior.

## 2. HTML, CSS and JavaScript

| Technology | Responsibility |
|---|---|
| HTML | Content, structure and meaning |
| CSS | Colors, typography, layout and visual presentation |
| JavaScript | Logic, events, dynamic behavior and application features |

Example:

```html
<h1>Hello, world!</h1>
<p>This is my first webpage.</p>
<button type="button">Click me</button>
```

HTML creates the heading, paragraph and button. CSS can style them. JavaScript can make the button perform an action.

## 3. Your first HTML document

Create a file named `index.html` in a text editor. Make sure it ends in `.html`, not `.txt`.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Webpage</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>I am learning HTML.</p>
</body>
</html>
```

Save the file and open it in a browser. Change the heading, save again and refresh.

## 4. Tags, elements and attributes

A **tag** is markup inside angle brackets: `<p>` is an opening tag and `</p>` is a closing tag.

An **element** is the complete construct:

```html
<p>This is a paragraph.</p>
```

An **attribute** gives an element extra information:

```html
<a href="https://example.com" target="_blank" rel="noopener">
  Visit Example
</a>
```

- `href` specifies the destination.
- `target="_blank"` requests a new browsing context.
- `rel="noopener"` prevents access through `window.opener`.

Write a space before each attribute, followed by `=` and a quoted value. Use lowercase names as the normal convention.

### Boolean attributes

A boolean attribute is true when present and false when absent:

```html
<input required>
<button disabled>Unavailable</button>
<video controls muted></video>
```

Writing `required="false"` still means it is present. Remove the attribute to make it false.

## 5. Nesting, void elements and comments

Elements can contain other elements. This is **nesting**:

```html
<p>Learn <strong>HTML</strong> step by step.</p>
```

Close nested elements in reverse order. Keep indentation consistent to make code readable.

**Void elements** cannot contain children and have no closing tag. Examples:

```html
<img src="photo.jpg" alt="A mountain">
<br>
<hr>
<input type="text">
<meta charset="UTF-8">
<link rel="stylesheet" href="styles.css">
```

Do not write `</img>` or `</input>`.

Comments are not displayed as page content:

```html
<!-- This is an HTML comment. -->
```

Never put passwords, API keys or private information in comments; source code can be inspected.

## 6. Document structure

- `<!doctype html>`: declares modern HTML and enables standards mode.
- `<html>`: root element; its `lang` attribute declares the page language.
- `<head>`: metadata and resource references, not ordinary visible page content.
- `<meta charset="UTF-8">`: declares text encoding.
- Viewport meta: helps the page use the device viewport.
- `<title>`: browser-tab title.
- `<body>`: visible document content.

Use this structure as the starting point for almost every page:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page title</title>
</head>
<body>
  <h1>Visible page heading</h1>
</body>
</html>
```

## 7. Text and headings

HTML has six heading levels, from `h1` (highest) to `h6` (lowest):

```html
<h1>Main page heading</h1>
<h2>Major section</h2>
<h3>Subsection</h3>
<h4>Smaller subsection</h4>
<h5>Lower-level heading</h5>
<h6>Lowest-level heading</h6>
```

Use headings to form a logical outline, not merely to make text large.

Common text elements:

```html
<p>A paragraph.</p>
<strong>Important text</strong>
<em>Stressed text</em>
<b>Attention-drawing text</b>
<i>Alternate voice or technical term</i>
<mark>Highlighted text</mark>
<small>Side note</small>
<del>Removed text</del>
<ins>Inserted text</ins>
H<sub>2</sub>O and x<sup>2</sup>
<abbr title="HyperText Markup Language">HTML</abbr>
<time datetime="2026-11-19">19 November 2026</time>
<br>
<hr>
```

Use `strong` and `em` for meaning, not just their default appearance. Use `br` for meaningful line breaks such as addresses or poetry, not to create page spacing.

Quotations and code:

```html
<blockquote cite="https://example.com">
  <p>A longer quotation.</p>
</blockquote>
<p>They said, <q>Keep learning.</q></p>
<p>Use <code>console.log()</code> to print.</p>
<pre><code>const answer = 42;
console.log(answer);</code></pre>
<kbd>Ctrl</kbd> + <kbd>S</kbd>
<samp>File saved</samp>
<var>total</var>
```

## 8. Links and paths

```html
<a href="https://developer.mozilla.org/">Visit MDN</a>
<a href="about.html">About this website</a>
<a href="#contact">Jump to contact</a>
<a href="mailto:hello@example.com">Send email</a>
<a href="tel:+10000000000">Call us</a>

<section id="contact">
  <h2>Contact</h2>
</section>
```

Path types:
- Absolute URL: `https://example.com/about.html`
- Same folder: `about.html`
- Child folder: `pages/about.html`
- Parent folder: `../index.html`
- Root-relative: `/images/logo.png`

File and folder names must match exactly on case-sensitive hosting systems. Use descriptive link text that tells users where the link goes.

## 9. Images and responsive images

```html
<img src="images/cat.jpg" alt="A grey cat sitting by a window">
```

Important attributes:
- `src`: image path or URL.
- `alt`: text alternative for meaningful images.
- `width` and `height`: dimensions that help reserve layout space.
- `loading="lazy"`: defer off-screen images when appropriate.
- `decoding="async"`: allow asynchronous image decoding.

For decorative images use an empty alternative: `alt=""`. Do not omit meaningful alt text.

Responsive image example:

```html
<img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 800px"
  width="800"
  height="533"
  alt="A forest beside a lake"
>
```

Use `picture` when different crops or formats are needed:

```html
<picture>
  <source media="(max-width: 600px)" srcset="portrait-crop.jpg">
  <img src="landscape.jpg" alt="A mountain landscape">
</picture>
```

## 10. Lists

Unordered list:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

Ordered list:

```html
<ol>
  <li>Create a file.</li>
  <li>Write HTML.</li>
  <li>Open it in a browser.</li>
</ol>
```

Description list:

```html
<dl>
  <dt>HTML</dt>
  <dd>Structures web content.</dd>
  <dt>CSS</dt>
  <dd>Controls presentation.</dd>
</dl>
```

Nested lists belong inside an `li` element.

## 11. Tables

Use tables for **tabular data**, not page layout:

```html
<table>
  <caption>Weekly study plan</caption>
  <thead>
    <tr><th scope="col">Day</th><th scope="col">Topic</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Monday</th><td>HTML basics</td></tr>
    <tr><th scope="row">Tuesday</th><td>Links and images</td></tr>
  </tbody>
</table>
```

- `table`: table container.
- `caption`: title or description.
- `thead`, `tbody`, `tfoot`: row groups.
- `tr`: row; `th`: header cell; `td`: data cell.
- `scope`: associates a header with a row or column.

## 12. Forms and validation

Forms collect user input:

```html
<form action="/register" method="post">
  <label for="full-name">Full name</label>
  <input id="full-name" name="fullName" type="text" autocomplete="name" required>

  <label for="email">Email</label>
  <input id="email" name="email" type="email" autocomplete="email" required>

  <label for="password">Password</label>
  <input id="password" name="password" type="password" minlength="8" required>

  <button type="submit">Create account</button>
</form>
```

Main form elements:
- `form`: form container.
- `label`: accessible name for a control.
- `input`: many types of user input.
- `textarea`: multi-line text.
- `select` and `option`: selection menu.
- `button`: action button.
- `fieldset` and `legend`: group related controls.
- `datalist`: suggestions for an input.
- `output`: calculation or action result.

Common input types: `text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`, `time`, `datetime-local`, `month`, `week`, `checkbox`, `radio`, `file`, `color`, `range`, `hidden`, `submit`, `reset` and `button`.

Radio and checkbox example:

```html
<fieldset>
  <legend>Choose a plan</legend>
  <label><input type="radio" name="plan" value="basic" checked> Basic</label>
  <label><input type="radio" name="plan" value="pro"> Pro</label>
</fieldset>
<label><input type="checkbox" name="updates" value="yes"> Send updates</label>
```

Select and textarea:

```html
<label for="country">Country</label>
<select id="country" name="country">
  <option value="">Choose a country</option>
  <option value="in">India</option>
  <option value="us">United States</option>
</select>
<label for="message">Message</label>
<textarea id="message" name="message" rows="5"></textarea>
```

Useful validation attributes: `required`, `min`, `max`, `step`, `minlength`, `maxlength`, `pattern`. A placeholder is a hint, not a label. A control generally needs a `name` to be included in form submission.

GET generally places form data in the URL; POST sends it in the request body. The server must implement the endpoint. **HTML alone does not create accounts or store submissions.** Browser validation is not a security boundary; validate and authorize on the server too.

## 13. Semantic HTML and page layout

Semantic elements communicate purpose:

```html
<header>
  <h1>My Website</h1>
  <nav aria-label="Main navigation">
    <a href="/">Home</a>
    <a href="/about.html">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>Article title</h2>
    <p>Article content...</p>
  </article>
  <aside>Related information</aside>
</main>
<footer>Copyright information</footer>
```

| Element | Meaning |
|---|---|
| `header` | Introductory content for page or section |
| `nav` | Major navigation links |
| `main` | Main content of the document |
| `article` | Self-contained composition |
| `section` | Thematic grouping, usually with a heading |
| `aside` | Complementary content |
| `footer` | Footer for page or section |
| `address` | Contact information for the relevant page/article |
| `div` | Generic block container |
| `span` | Generic inline container |

Use generic containers only when no more meaningful element fits. Semantic HTML supports accessibility, maintainability and machine understanding.

## 14. Audio, video and iframe

Audio:

```html
<audio controls preload="metadata">
  <source src="audio/song.mp3" type="audio/mpeg">
  <source src="audio/song.ogg" type="audio/ogg">
  Your browser does not support audio.
</audio>
```

Video with captions:

```html
<video controls width="640" poster="video-cover.jpg">
  <source src="video/demo.mp4" type="video/mp4">
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English" default>
  Your browser does not support video.
</video>
```

An iframe embeds another browsing context:

```html
<iframe
  src="https://example.com/embed"
  title="Example embedded content"
  loading="lazy"
  width="600"
  height="400"
  sandbox
></iframe>
```

Give iframes a meaningful title and use the narrowest practical sandbox permissions. Autoplay is often restricted and can surprise users.

## 15. Metadata and SEO

Metadata belongs in the `head`:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learn HTML — Beginner Guide</title>
  <meta name="description" content="Learn HTML with clear examples and exercises.">
  <link rel="canonical" href="https://example.com/html-guide">
  <link rel="icon" href="/favicon.ico">
  <meta property="og:title" content="Learn HTML">
  <meta property="og:description" content="A practical HTML learning guide.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://example.com/preview.png">
</head>
```

Good foundations: unique titles, accurate descriptions, semantic content, descriptive links, useful image alternatives and crawlable pages. Metadata does not guarantee a search ranking.

## 16. Accessibility

Accessibility means people with different abilities can use your content and controls.

- Use semantic elements for their intended purpose.
- Provide meaningful alt text for informative images; use empty alt for decorative images.
- Connect form controls to visible labels.
- Use real buttons for actions and links for navigation.
- Keep a logical heading hierarchy.
- Ensure keyboard users can reach and operate controls.
- Use descriptive link text.
- Provide captions or transcripts for relevant media.
- Do not communicate information through color alone.
- Set the document language with `lang`.

Prefer native HTML before ARIA. Incorrect ARIA can make accessibility worse.

```html
<button type="button" aria-expanded="false" aria-controls="details">
  Show details
</button>
<div id="details" hidden>More information.</div>
```

JavaScript must update `aria-expanded` and `hidden` when this control is activated.

## 17. Modern HTML elements

Disclosure widget:

```html
<details>
  <summary>What is HTML?</summary>
  <p>HTML structures web content.</p>
</details>
```

Dialog:

```html
<dialog id="notice">
  <p>This is a dialog.</p>
  <form method="dialog"><button>Close</button></form>
</dialog>
```

JavaScript can open a dialog with `showModal()` or `show()`. Give it an accessible name and sensible focus behavior.

Template:

```html
<template id="card-template">
  <article class="card"><h2></h2><p></p></article>
</template>
```

Template content is inert until code clones and inserts it.

Data attributes:

```html
<button type="button" data-user-id="42">View profile</button>
```

JavaScript can read custom `data-*` attributes using `element.dataset`. Do not store secrets there.

Progress and measurement:

```html
<label for="download">Download progress</label>
<progress id="download" value="65" max="100">65%</progress>
<label for="storage">Storage used</label>
<meter id="storage" min="0" max="100" value="70">70%</meter>
```

`progress` represents task completion; `meter` represents a measurement within a known range.

Other useful elements include `figure`, `figcaption`, `picture`, `source`, `track`, `output`, `data`, `wbr` and `ruby`.

## 18. SVG and canvas

SVG is resolution-independent vector graphics and can be embedded in HTML:

```html
<svg viewBox="0 0 100 100" role="img" aria-labelledby="circle-title">
  <title id="circle-title">Blue circle</title>
  <circle cx="50" cy="50" r="40" fill="blue"></circle>
</svg>
```

Canvas is a bitmap drawing surface controlled through JavaScript:

```html
<canvas id="drawing" width="300" height="150">
  A drawing area. The visual drawing is created with JavaScript.
</canvas>
```

Provide accessible alternatives for important visual information. HTML creates the canvas; JavaScript performs the drawing.

## 19. Security and performance

- Never trust user-submitted data; validate it on the server.
- Safely render untrusted text; do not inject arbitrary strings as HTML.
- Do not place passwords, private tokens or secrets in source, comments or data attributes.
- Use HTTPS in production.
- Use `rel="noopener"` for links opened in a new tab.
- Restrict iframe permissions with `sandbox` where possible.
- Lazy-load suitable below-the-fold images, not the main hero image by default.
- Set image dimensions to reduce layout shifts.
- Avoid unnecessary third-party embeds and scripts.
- Serve media at appropriate dimensions and formats.

## 20. Validation and debugging

Common mistakes: missing end tags, invalid nesting, misspelled attributes, incorrect paths, duplicate IDs, missing alt text, unlabeled controls, visible content inside `head`, and using a button instead of a link (or vice versa).

Tools:
- Browser developer tools: inspect DOM, console and network requests.
- [Nu HTML Checker](https://validator.w3.org/nu/): check markup conformance.
- [MDN HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element): research elements.

A validator finds many conformance issues, but it cannot decide whether your content is clear or usable.

## 21. Best practices

1. Start with `<!doctype html>`.
2. Set the correct `lang`.
3. Include UTF-8 and viewport metadata.
4. Use lowercase element names and quoted attribute values.
5. Keep IDs unique.
6. Indent nested markup consistently.
7. Prefer semantic elements over generic containers.
8. Give images suitable alt text.
9. Label form controls.
10. Use headings in a meaningful order.
11. Use tables only for data.
12. Use links for navigation and buttons for actions.
13. Validate markup and test with a keyboard.
14. Keep structure in HTML, styling in CSS and complex behavior in JavaScript.

## 22. What to learn next

After HTML, study:
- **CSS:** selectors, box model, typography, Flexbox, Grid and responsive design.
- **JavaScript:** variables, functions, events, DOM and asynchronous code.
- **Accessibility:** keyboard use, screen readers and WCAG.
- **Web fundamentals:** HTTP, URLs, caching and security.
- **Git and deployment:** version control and publishing.

## Glossary

| Term | Meaning |
|---|---|
| HTML | HyperText Markup Language |
| Tag | Markup such as `<p>` or `</p>` |
| Element | Complete HTML construct |
| Attribute | Extra information/settings on an element |
| Void element | Element with no children or end tag |
| Nesting | Placing elements inside other elements |
| DOM | Browser's Document Object Model |
| Semantic HTML | Markup communicating content meaning |
| Metadata | Information describing a document |
| Accessibility | Making content usable by people with varied abilities |
| Validation | Checking markup against conformance rules |

**Practice rule:** read a topic, type it yourself, open it in a browser, inspect the result and experiment.
# HTML Cheat Sheet

Quick reference. For explanations, see [HTML-GUIDE.md](HTML-GUIDE.md).

## Basic document

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page title</title>
</head>
<body>
  <h1>Hello!</h1>
  <p>My webpage.</p>
</body>
</html>
```

## Text elements

| Element | Purpose |
|---|---|
| `h1`–`h6` | Headings |
| `p` | Paragraph |
| `br` | Line break |
| `hr` | Thematic break |
| `strong` | Strong importance |
| `em` | Stress emphasis |
| `b`, `i` | Attention / alternate voice |
| `mark` | Highlight |
| `small` | Side comment |
| `del`, `ins` | Deleted / inserted text |
| `sub`, `sup` | Subscript / superscript |
| `code`, `pre` | Code / preformatted text |
| `blockquote`, `q` | Quotations |
| `abbr` | Abbreviation |
| `time` | Date or time |

## Links and images

```html
<a href="https://example.com">External link</a>
<a href="about.html">Relative page</a>
<a href="#contact">Jump to section</a>
<a href="mailto:hello@example.com">Email</a>

<img src="photo.jpg" alt="Description" width="800" height="600">
<img src="decorative.svg" alt="">
<img src="large.jpg" alt="Landscape" loading="lazy">
```

## Lists

```html
<ul><li>Unordered item</li></ul>
<ol><li>Ordered item</li></ol>
<dl><dt>Term</dt><dd>Definition</dd></dl>
```

## Tables

```html
<table>
  <caption>Title</caption>
  <thead><tr><th scope="col">Name</th></tr></thead>
  <tbody><tr><td>Ever</td></tr></tbody>
</table>
```

## Forms

```html
<form action="/submit" method="post">
  <label for="name">Name</label>
  <input id="name" name="name" type="text" required>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>
  <button type="submit">Submit</button>
</form>
```

Input types: `text`, `password`, `email`, `number`, `tel`, `url`, `search`, `date`, `time`, `datetime-local`, `month`, `week`, `checkbox`, `radio`, `file`, `color`, `range`, `hidden`, `submit`, `reset`, `button`.

Useful attributes: `name`, `value`, `placeholder`, `required`, `min`, `max`, `step`, `minlength`, `maxlength`, `pattern`, `checked`, `selected`, `multiple`, `disabled`, `readonly`, `autocomplete`, `accept`.

## Semantic layout

```html
<header>...</header>
<nav aria-label="Main">...</nav>
<main>
  <article><section>...</section></article>
  <aside>...</aside>
</main>
<footer>...</footer>
```

## Media

```html
<audio controls src="audio.mp3"></audio>
<video controls width="640">
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
</video>
<iframe src="https://example.com" title="Example" loading="lazy" sandbox></iframe>
```

## Modern elements

| Element | Purpose |
|---|---|
| `details`, `summary` | Disclosure widget |
| `dialog` | Dialog box |
| `template` | Inert markup for cloning |
| `progress` | Task progress |
| `meter` | Scalar measurement |
| `output` | Calculation/action result |
| `picture`, `source` | Responsive/alternative media |
| `figure`, `figcaption` | Media and caption |
| `data` | Machine-readable value |
| `wbr` | Optional line-break opportunity |

## Global attributes

`id`, `class`, `style`, `title`, `lang`, `dir`, `hidden`, `tabindex`, `contenteditable`, `draggable`, `data-*`, `aria-*`.

Use unique IDs. Prefer external CSS over extensive inline `style`.

## Void elements

`area`, `base`, `br`, `col`, `embed`, `hr`, `img`, `input`, `link`, `meta`, `source`, `track`, `wbr`.

They have no closing tags and cannot contain child elements.

## Character references

| Character | HTML |
|---|---|
| Less than | `&lt;` |
| Greater than | `&gt;` |
| Ampersand | `&amp;` |
| Non-breaking space | `&nbsp;` |
| Double quote | `&quot;` |
| Copyright | `&copy;` |

## File paths

- Same folder: `about.html`
- Child folder: `pages/about.html`
- Parent folder: `../index.html`
- Image folder: `images/photo.jpg`
- Root-relative: `/assets/logo.svg`

## Quick quality checklist

- [ ] Doctype, language, UTF-8 and viewport are present.
- [ ] Page title is meaningful.
- [ ] Elements are properly nested.
- [ ] IDs are unique.
- [ ] Images have suitable alt text.
- [ ] Form controls have labels and names.
- [ ] Links describe their destinations.
- [ ] Semantic elements are used appropriately.
- [ ] HTML passes a validator.

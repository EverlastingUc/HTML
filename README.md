# HTML Academy — Complete HTML Learning Repository

A complete, beginner-to-advanced HTML learning library, with a chapter-based interactive textbook and detailed written references.

## 🌐 Interactive textbook

**Website:** https://everlastinguc.github.io/HTML/

The website includes:
- Dedicated interactive Learning Lab: advanced playground, viewport preview and HTML download
- Educational markup checker, DOM tree explorer and guided coding challenges
- HTML flashcards, 10-question final exam and printable completion certificate
- Portfolio, restaurant menu, registration form and blog project starters
- Browser-local notes and personal bookmarks
- 12 structured chapters, from HTML foundations to advanced markup
- Detailed explanations, examples, tables and practical notes
- Chapter navigation and full-course search
- Per-chapter knowledge-check quizzes
- Saved learning progress in your browser
- Live HTML editor and sandboxed preview
- Interactive Three.js 3D visualization
- Dark/light theme and responsive layout

The first deployment is published automatically by GitHub Actions when changes are pushed to `main`. In repository Settings → Pages, set the publishing source to **GitHub Actions** if it is not already selected.

## 📚 Written learning material

1. **[HTML-GUIDE.md](HTML-GUIDE.md)** — complete written course and reference.
2. **[CHEATSHEET.md](CHEATSHEET.md)** — quick reference for syntax, elements and attributes.
3. **[PRACTICE.md](PRACTICE.md)** — exercises, mini-projects and progress checklist.
4. **[examples/index.html](examples/index.html)** — a complete example page.

## 🧭 Course chapters

1. Welcome to HTML
2. Your First HTML Document
3. Tags, Elements & Attributes
4. Text, Headings & Content
5. Links, URLs & Navigation
6. Images & Responsive Media
7. Lists, Tables & Data
8. Forms & User Input
9. Semantic HTML & Accessibility
10. Media, Metadata & Modern HTML
11. Advanced HTML, SVG & Performance
12. Projects, Validation & Next Steps

## 🛠️ Project structure

```text
HTML/
├── index.html
├── assets/
│   ├── styles.css
│   ├── app.js
│   ├── chapters.js
│   └── three-scene.js
├── .github/workflows/
│   └── deploy.yml
├── HTML-GUIDE.md
├── CHEATSHEET.md
├── PRACTICE.md
└── examples/
    └── index.html
```

The site is a static project. Three.js is loaded as an ES module from a CDN; an internet connection is needed for the 3D visualization. The textbook and core navigation are plain HTML, CSS and JavaScript.

## 📖 Official references

- [MDN HTML overview](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/)
- [Three.js documentation](https://threejs.org/manual/)
- [Nu HTML Checker](https://validator.w3.org/nu/)

No previous HTML knowledge is required. Read a chapter, type the examples yourself, experiment in the playground and complete the exercises.

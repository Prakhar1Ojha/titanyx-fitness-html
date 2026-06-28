# 📘 HTML Tags Used in Titanyx Fitness Gym — Explained

Every tag used in `TFGym.html`, what it does, and why it's there.

---

## Document Setup

| Tag | What it does |
|---|---|
| `<!DOCTYPE html>` | Tells the browser "this is HTML5." Without it, browser may render in old Quirks Mode. |
| `<html lang="en">` | Root of the whole page. `lang="en"` tells screen readers/search engines the page is in English. |
| `<head>` | Holds info *about* the page (not visible content) — meta tags, title. |
| `<meta charset="UTF-8">` | Sets character encoding so emojis (✔, 🏋), ₹, etc. display correctly. |
| `<meta name="viewport">` | Makes the page scale properly on mobile screens. |
| `<meta name="description">` | Summary shown in Google search results (invisible on page itself). |
| `<meta name="keywords">` | Old SEO tag; Google mostly ignores it today but doesn't hurt. |
| `<meta name="author">` | States who made the page. Informational only. |
| `<meta name="robots">` | Tells search bots "index this page, follow its links." |
| `<title>` | Text shown on the browser tab and in search results. |
| `<body>` | Everything visible to the user lives inside this. |

---

## Page Structure

| Tag | What it does |
|---|---|
| `<header>` | *Should* wrap the logo/title/nav at the top. ⚠️ Your file has a closing `</header>` with no opening tag — bug to fix. |
| `<nav>` | Marks a block of navigation links. Used twice (top menu + "Quick Navigation" section) — totally fine. |
| `<main>` | Wraps the primary content of the page. Should appear once per page — yours does. ✅ |
| `<section>` | Groups a chunk of related content (About, Facilities, Trainers, etc.) — each gets its own heading. |
| `<article>` | Self-contained piece of content that could stand alone — used for trainer bios, blog posts, member transformation stories. |
| `<footer>` | Bottom-of-page content: copyright, contact, back-to-top link. |
| `<hr>` | Draws a horizontal line — you use it to visually separate sections. |
| `<br>` | Forces a line break inside text. Should be used sparingly (you use it a lot for spacing — CSS margins would be cleaner). |

---

## Text & Headings

| Tag | What it does |
|---|---|
| `<h1>` | Main page heading — should appear once. Yours: gym name. ✅ |
| `<h2>` | Section headings (About, Membership, Trainers, etc.) |
| `<h3>` | Sub-headings inside sections (individual trainer names, article titles) |
| `<h4>` | One level deeper (trainer's job title under their name) |
| `<p>` | A paragraph of regular text. |
| `<strong>` | Marks text as important — browsers bold it, and screen readers emphasize it (not just visual bolding). |

---

## Lists

| Tag | What it does |
|---|---|
| `<ul>` | Bullet-point list — used for facilities, services, certifications. |
| `<ol>` | Numbered list — used for membership rules and the "how to join" steps (order matters). |
| `<li>` | A single item inside a `ul` or `ol`. |
| `<dl>` | "Description list" — pairs a term with its explanation. Used for Training Levels (Beginner/Intermediate/Advanced). |
| `<dt>` | The term itself inside a `<dl>` (e.g. "Beginner"). |
| `<dd>` | The description/definition for that term. |

---

## Tables

| Tag | What it does |
|---|---|
| `<table>` | Starts a data table. |
| `<caption>` | Title of the table, read by screen readers first. |
| `<thead>` | Wraps the header row(s) of the table. |
| `<tbody>` | Wraps the actual data rows. |
| `<tr>` | One table row. |
| `<th>` | A header cell (bold, defines a column/row label). |
| `<td>` | A regular data cell. |

You use `border`, `cellpadding`, `cellspacing` attributes on these tables — those are **deprecated in HTML5**; that styling should move to CSS instead.

---

## Images & Media

| Tag | What it does |
|---|---|
| `<img>` | Embeds an image. `src` = where it comes from, `alt` = text description (critical for accessibility + SEO). |
| `<figure>` | Wraps an image (or other media) that has a caption — semantically groups them. |
| `<figcaption>` | The caption text for the `<figure>` above it. |
| `<iframe>` | Embeds another page/widget inside yours — used here as a placeholder for a future Google Map. |

---

## Forms

| Tag | What it does |
|---|---|
| `<form>` | Wraps a group of inputs that get submitted together. `action="#"` is a placeholder (no backend connected yet). |
| `<fieldset>` | Groups related inputs visually and semantically (e.g. all the BMI fields together). |
| `<legend>` | The title of a `<fieldset>` — e.g. "BMI Information." |
| `<label>` | Text describing an input. `for="id"` links it to the matching input so clicking the label focuses the field. |
| `<input>` | A user input field. `type=` changes its behavior: `text`, `email`, `tel`, `number`, `radio`. |
| `<select>` | A dropdown menu. |
| `<option>` | One choice inside a `<select>`. |
| `<textarea>` | A multi-line text box (used for the "Additional Message" field). |
| `<button>` | A clickable button. `type="submit"` sends the form, `type="reset"` clears it. |

---

## Other Semantic Tags

| Tag | What it does |
|---|---|
| `<address>` | Marks up contact information (physical address, phone, email) — semantically meaningful, not just a `<p>`. |
| `<blockquote>` | A quoted block of text — used for testimonials. Semantically says "this is someone else's words," unlike a plain paragraph. |
| `<footer>` (inside `<blockquote>`) | Attributes the quote to its source — "— Aman Gupta." |
| `<details>` | Creates a native expand/collapse widget — no JavaScript needed. Used for the FAQ section. |
| `<summary>` | The always-visible clickable heading of a `<details>` block (the question). |
| `<a>` | A hyperlink. `href="#section"` jumps to an ID on the same page; `href="https://..."` goes to an external site. |

---

## Tags to Remove / Avoid

| Tag | Why it's a problem |
|---|---|
| `<center>` | Deprecated since HTML4. Use CSS (`text-align: center` or `margin: auto`) instead. |

---

## Quick Memory Tips

- **D-H-B** → every page needs **D**octype, **H**ead, **B**ody.
- **S-A** → every image needs `src` **and** `alt`.
- **L-I-B** → forms follow **L**abel → **I**nput → **B**utton.

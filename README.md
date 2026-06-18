# Rob Putaro Clinic Studio Website, Dark Premium v2

A multi-page static website built for Vercel.

## Pages

- `index.html` Home
- `what.html` What I Build
- `process.html` Process
- `care.html` Site Care
- `contact.html` Contact

## Vercel Deploy Settings

- Framework Preset: `Other`
- Build Command: leave blank
- Output Directory: `./`

## Email

The site uses: `robputaro@gmail.com`

Search for `robputaro@gmail.com` to update every email reference if needed.

## Headshot Replacement

The site currently uses a premium SVG placeholder.

To use a real headshot:

1. Save your image as:

```text
assets/rob-headshot.jpg
```

2. Commit and push to GitHub.
3. Vercel will redeploy automatically.

The homepage already tries to load `assets/rob-headshot.jpg` first and falls back to the placeholder if that file is missing.

## Design Notes

This version intentionally moves away from a generic block/card AI look and toward a darker agency-style landing page with:

- Large editorial typography
- Newsreader italic serif accents
- Dark earthy palette
- Grid texture and grain overlays
- Asymmetrical hero portrait treatment
- Scroll progress and reveal animation
- Marquee capability band
- Stronger landing-page persuasion flow

## Editing Copy

For simple copy edits, open the relevant HTML file and search for the visible sentence.
Then edit, commit, and push to `main`.

## Contact Button

The primary contact CTA is a `mailto:` link in `contact.html` and `index.html`.

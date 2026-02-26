# Artist Page Template
<img width="1564" height="1066" alt="artispage_template_image" src="https://github.com/user-attachments/assets/182a2e94-c30a-457e-bb8a-625ae2a413f6" />

A minimal, fast artist/musician website template built with [Astro](https://astro.build) and deployable to [Vercel](https://vercel.com) in minutes.

**Features:**

- Link-in-bio style landing page with social media icons
- Contact form powered by [Web3Forms](https://web3forms.com) (no backend needed)
- Imprint & Privacy Policy pages (GDPR-ready structure)
- Vercel Analytics integration
- Strong default security headers via `vercel.json`
- No external fonts, no tracking cookies, no heavy dependencies

---

## Quick Start

```sh
# 1. Clone or use this template
git clone https://github.com/pascal691/artistpage_template.git
cd artistpage_template

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# → edit .env and add your Web3Forms access key

# 4. Start the dev server
npm run dev
```

---

## Customization

### 1. Your name & social links

Edit `src/pages/index.astro`:

- Replace `Your Name` with your artist name in the `<h1>` and `<BaseLayout>` props
- Replace each `href` in `socialLinks` with your real profile URLs
- Remove platforms you don't use

### 2. Contact form

- Get a free access key at [web3forms.com](https://web3forms.com)
- Add it to `.env` as `PUBLIC_WEB3FORMS_ACCESS_KEY`
- For Vercel deployment: add the variable in **Vercel → Project → Settings → Environment Variables** instead

### 3. Legal pages

Edit `src/pages/impressum.astro` and `src/pages/datenschutz.astro`:

- Replace all `Your Name`, `Your Street 1`, `12345 Your City`, `your@email.com` placeholders with your real details

### 4. Branding

- Replace `/public/images/landing-bg.jpg` with your own background image
- Replace `/public/og-default.png` with your OG image (1200×630 px)
- Update `siteName` in `src/layouts/BaseLayout.astro`

---

## Project Structure

```text
/
├── public/
│   ├── icons/social/       # SVG social media icons
│   └── images/             # Background and OG images
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro     # Landing page
│       ├── kontakt.astro   # Contact form
│       ├── impressum.astro # Legal notice (Impressum)
│       └── datenschutz.astro # Privacy policy
├── .env.example
├── astro.config.mjs
└── vercel.json
```

---

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build for production to `./dist/`    |
| `npm run preview` | Preview the production build locally |

---

## Deploy to Vercel

1. Push to GitHub
2. Import the repository in [vercel.com/new](https://vercel.com/new)
3. Add `PUBLIC_WEB3FORMS_ACCESS_KEY` under **Environment Variables**
4. Deploy

---

## License

MIT

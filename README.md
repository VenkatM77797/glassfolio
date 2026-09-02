# GlassFolio

An open-source, iOS-inspired **Liquid Glass** developer portfolio template built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

Clone it, edit **four data files**, drop in your resume and screenshots — you have a complete personal portfolio. No personal data lives inside UI components.

- **Live Demo:** _add your deployed URL here_
- **GitHub:** _add your repository URL here_
- **License:** [MIT](./LICENSE)

## Screenshots

Add your own screenshots here after deploying:

| Light | Dark |
| ----- | ---- |
| `docs/screenshot-light.png` | `docs/screenshot-dark.png` |

## Features

- iOS-inspired Liquid Glass UI (translucent surfaces, hairlines, soft depth)
- Light / dark / system theme with a centralized CSS-variable design system
- Fully responsive: floating desktop nav, iOS-style mobile bottom tab bar
- Smooth Framer Motion animations with full `prefers-reduced-motion` support
- Project gallery with a glass modal on desktop and a bottom sheet on mobile
- Animated experience timeline, expandable skill categories, education cards
- Resume view/download that hides itself gracefully when no resume is set
- Contact section with a form that works over `mailto:` — no backend required
- Configurable SEO: title, description, Open Graph, theme color, favicon
- Accessible: semantic HTML, keyboard navigation, visible focus, ARIA labels
- Zero secrets, zero API keys, zero vendor lock-in

## Tech Stack

| Purpose | Choice |
| ------- | ------ |
| UI | React 19 + TypeScript (strict) |
| Build | Vite |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Framework | TanStack Start (SSR) + TanStack Router (single-page, section-scroll) |

## Installation

```bash
git clone <repository-url>
cd <project-name>
npm install
```

Bun works too:

```bash
bun install
```

## Running locally

```bash
npm run dev
# or: bun run dev
```

Then open the printed local URL (default `http://localhost:8080`).

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # eslint
```

## Customization

Everything personal lives in `src/data/`. UI components only read from these files.

```
src/
├── data/
│   ├── portfolio.ts    # name, role, bio, socials, education, resume, SEO
│   ├── projects.ts     # project gallery
│   ├── skills.ts       # skill categories
│   └── experience.ts   # work history
├── components/
│   ├── sections/       # hero, about, skills, projects, experience, resume, contact
│   ├── projects/       # project card + detail sheet
│   └── ui/             # GlassCard, GlassButton, GlassBadge, GlassSheet, ...
└── styles.css          # design tokens, accent color, glass utilities
```

### STEP 1 — Your details

Open `src/data/portfolio.ts` and change:

- `name`, `shortName`, `role`, `tagline`, `description`
- `location`, `email`, `avatar`
- `social` links (leave a value as `""` to hide that link)
- `stats`, `interests`
- `education`
- `meta` (page title, description, site URL, Open Graph image, theme color)

### STEP 2 — Add projects

Open `src/data/projects.ts` and replace the example projects. Each project:

```ts
{
  id: "my-project",
  title: "My Project",
  description: "One-line summary shown on the card.",
  longDescription: "Longer story shown in the detail view.",
  image: "/projects/my-project.png",
  screenshots: ["/projects/my-project-2.png"],
  technologies: ["React", "TypeScript"],
  github: "https://github.com/you/my-project",
  demo: "https://my-project.example.com",
  featured: true,
  year: "2026",
}
```

Optional fields can be omitted. The gallery renders automatically — you never touch a component.

### STEP 3 — Add skills

Open `src/data/skills.ts`. Add, rename or remove categories; the UI adapts. `icon` accepts:
`layout`, `server`, `database`, `cloud`, `wrench`, `sparkles`.

### STEP 4 — Add experience

Open `src/data/experience.ts` (newest role first). Leave `endDate: ""` for your current role and it renders as **Present**.

### STEP 5 — Add your resume

Put your PDF at `public/resume.pdf` (keep `resumeUrl: "/resume.pdf"`).
Set `resumeUrl: ""` to hide the resume section entirely — no broken links.

### STEP 6 — Replace images

| File | Purpose |
| ---- | ------- |
| `public/images/profile.jpg` | Profile photo — set `avatar: "/images/profile.jpg"` |
| `public/projects/*.png` | Project screenshots referenced from `projects.ts` |
| `public/favicon.svg` | Favicon (generic developer mark by default) |
| `public/resume.pdf` | Your resume |

Missing images never break the layout — a placeholder tile with the initial is shown instead.

### STEP 7 — Run it

```bash
npm run dev
```

## Changing the theme / accent color

All colors are `oklch` CSS variables in `src/styles.css`. To change the accent, edit one line in `:root` (and optionally the `.dark` block):

```css
:root {
  --accent-base: oklch(0.6 0.184 253); /* your accent */
  --accent-shadow: oklch(0.6 0.184 253 / 45%);
}
```

Also update `meta.themeColor` in `src/data/portfolio.ts` so the browser UI matches.

Glass intensity, radius and shadows live in the same file (`--glass`, `--radius`, `--shadow-glass`).

## Contact form

By default the form opens the visitor's mail client via `mailto:` — nothing to host, no keys.

To use a form service (Formspree, Getform, Basin, …), set the public endpoint:

```ts
contactFormEndpoint: "https://formspree.io/f/yourformid",
```

The form then POSTs JSON (`name`, `email`, `message`). Only ever use public endpoint URLs — never commit private API keys.

## Deploying

### Vercel

1. Push the repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`.
4. Deploy.

### Netlify

1. Push the repo to GitHub.
2. On [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Build command `npm run build`.
4. Deploy.

### Replit

1. Create a Repl → **Import from GitHub** → paste the repo URL.
2. Run `npm install`, then `npm run dev`.
3. Use Replit's deployment tab to publish.

### Any static/Node host

```bash
npm run build
npm run preview   # verify locally
```

Then deploy the generated output directory with your host of choice.

## GitHub setup

```bash
git init
git add .
git commit -m "feat: my portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

Before pushing, double-check there are no secrets: this template ships with **no** API keys, `.env` files, or private data.

## Accessibility & motion

- Semantic landmarks (`header`, `main`, `section`, `footer`) and one `h1`
- Keyboard-operable navigation, dialogs (Escape to close) and forms
- Visible focus rings via `:focus-visible`
- All non-essential animation disables under `prefers-reduced-motion: reduce`

## Contributing

Issues and pull requests are welcome. Keep personal data out of components — it belongs in `src/data/`.

## License

[MIT](./LICENSE) — free to use, modify and publish as your own portfolio.

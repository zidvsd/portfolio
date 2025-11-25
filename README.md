# Rashid Visda — Developer Portfolio

> A fast, minimal portfolio built with Next.js 15, TypeScript and Tailwind CSS 4.

[![Next.js](https://img.shields.io/badge/next-15.5.4-blue?logo=next.js)](https://nextjs.org/)

---

## Demo

Live demo: [https://portfolio-five-sand-23.vercel.app/](https://portfolio-five-sand-23.vercel.app/)

## What this project does

This repository is a personal developer portfolio (website) that showcases projects, achievements, and analytics. It's implemented with the Next.js 15 App Router, TypeScript, Tailwind CSS, and several UI/analytics integrations (Chart.js, Lucide icons, Keen Slider, WakaTime & GitHub data fetchers).

Key pages:

- Home — featured projects and services (bento grid layout)
- About — bio, work and education
- Projects — dynamic project pages populated from GitHub/README files
- Achievements — certificates and badges with search/filter
- Dashboard — GitHub + WakaTime visualizations (Chart.js)
- Contact — email form (Nodemailer) and social links

## Why this is useful

- Lightweight, responsive portfolio starter using modern Next.js features and Turbopack for fast builds
- Dark/light theme support with Tailwind `dark` class
- Example integrations for fetching and visualizing external developer data (GitHub, WakaTime)
- Ready-to-deploy to Vercel or other Node.js hosts

## Quick start (developer)

Requirements

- Node.js 18+ (recommended)
- npm (or Yarn)

Install and run locally

```bash
git clone --depth=1 https://github.com/zidvsd/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

Build for production

```bash
npm run build    # builds using Turbopack
npm start        # runs the production server
```

Linting

```bash
npm run lint
```

## Environment variables

Create a `.env.local` at the project root with the following values when you need API integrations:

```env
# GitHub (optional)
GITHUB_API_KEY=your_github_api_key
GITHUB_USERNAME=your_github_username

# WakaTime (optional)
WAKATIME_API_KEY=your_wakatime_api_key
WAKATIME_USERNAME=your_wakatime_username

# Email (for contact form)
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_specific_password
MAIL_TO=recipient_email@gmail.com
```

Notes:

- The app runs without these keys but features that fetch external data will be disabled or empty.

## Project structure (high level)

- `app/` — Next.js App Router pages and route handlers
- `components/` — UI components and layout pieces (`layout/`, `section/`, `ui/`)
- `data/` — JSON content used by the app (`navs.json`, `profile.json`, etc.)
- `lib/` — small helper modules (GitHub/WakaTime fetchers, utils)
- `public/` — static assets (images, icons)
- `types/` — TypeScript types

See the `app/`, `components/`, and `lib/` folders for implementation details.

## Deployment

- The project is compatible with Vercel (recommended). Push to your GitHub repo and import the project to Vercel for automatic deployments.
- Ensure environment variables are configured in your Vercel project settings.

## Contributing & support

- Bug reports and feature requests: open an issue in this repository.
- Want to contribute? Please open a pull request. For larger contributions, create an issue first to discuss the change.
- See `CONTRIBUTING.md` (if present) for contribution guidelines.

## Maintainers

- Primary: `zidvsd` (GitHub profile)

For direct contact see the `app/contact` page or the site contact information.

## License

This project references a license file — see `LICENSE` in the repository root for full terms.

---

If you'd like, I can also:

- add a `CONTRIBUTING.md` template in the repo
- add CI badges (GitHub Actions / Vercel) with working links
- generate a short `docs/` folder with architecture notes

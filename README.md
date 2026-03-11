# Zotletics

A fitness plan creation app for UCI students — personalized workout plans built around gym equipment in Mesa Court and Middle Earth housing.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Auth:** Clerk (@uci.edu)
- **Database:** Supabase (PostgreSQL)
- **AI:** Anthropic (Claude)
- **Deploy:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy the example env file and fill in your keys:

```bash
cp .env.local.example .env.local
```

Then add your keys:

- **Supabase:** [supabase.com](https://supabase.com) — create project → Settings → API
- **Clerk:** [clerk.com](https://clerk.com) — create app → set @uci.edu allowlist
- **Anthropic:** [console.anthropic.com](https://console.anthropic.com) — API keys

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Deploy to Vercel

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

## Project Structure

```
/app          - Next.js App Router pages & layouts
/components   - React components (incl. shadcn/ui)
/lib          - Utilities, equipment data, API helpers
```

## Build Phases

See the technical blueprint for the full roadmap. Current status:

- [x] **Phase 1** — Project setup (Next.js, Tailwind, shadcn, env)
- [ ] **Phase 2** — Auth & Database (Clerk + Supabase)
- [ ] **Phase 3** — Onboarding flow
- [ ] **Phase 4** — AI workout generation
- [ ] **Phase 5** — Workout logging & calendar
- [ ] **Phase 6** — AI chat companion
- [ ] **Phase 7** — Social features
- [ ] **Phase 8** — Polish & launch

# Live Resume

An elegant, interactive portfolio and resume crafted with precision.

## Aesthetic

A refined monochromatic palette with amber accents — no saturated pinks or purples. Clean slate tones, warm gold highlights, and purposeful whitespace.

## Features

- Interactive experience timeline
- Filterable portfolio grid
- PDF export with multiple formats
- Print-optimized layouts
- Validated contact form
- Fluid animations

## Quick Start

```bash
bun install
bun dev
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 |
| UI | React 19, Tailwind CSS 4 |
| Motion | Framer Motion |
| Charts | Recharts |
| Forms | Zod + React Hook Form |

## Structure

```
src/
├── app/              # Pages & API routes
├── components/
│   ├── resume/       # Resume sections
│   ├── portfolio/    # Project gallery
│   ├── contact/     # Contact components
│   ├── layout/      # Shell components
│   └── ui/          # Primitives
├── config/           # Site settings
└── data/             # Content files
```

## Commands

| Command | Purpose |
|---------|---------|
| `bun dev` | Development server |
| `bun build` | Production build |
| `bun lint` | Code quality |
| `bun typecheck` | Type validation |
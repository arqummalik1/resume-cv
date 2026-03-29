# Live Resume

A modern, interactive portfolio and resume built with Next.js.

## Features

- Interactive resume with experience timeline
- Portfolio grid with project filtering
- PDF export capability
- Print-optimized layout
- Contact form with validation
- Responsive design

## Getting Started

```bash
bun install
bun dev
```

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- Recharts
- Zod + React Hook Form

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/      # React components
│   ├── resume/       # Resume-related components
│   ├── portfolio/    # Portfolio components
│   ├── contact/     # Contact form components
│   ├── layout/      # Layout components
│   └── ui/          # Reusable UI components
├── config/           # Site configuration
└── data/             # Content data files
```

## Commands

| Command      | Description         |
|-------------|---------------------|
| `bun dev`   | Start dev server    |
| `bun build` | Production build |
| `bun lint`  | Run ESLint        |
| `bun typecheck` | Type check    |
# MCP Directory

A Next.js app that powers a browsable catalog of MCP servers. It stores metadata in Supabase, fetches README content via external APIs, and uses LLMs to summarize projects.

## Features

- Browse featured MCP servers with search and keyword filtering
- Categories to explore servers by category
- Project detail pages with full README content and markdown rendering
- Submit new MCP servers via API
- AI summarization using OpenAI to extract project metadata from README files
- SEO support with sitemaps, robots.txt, and canonical URLs

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| Framework | Next.js 15, React 19 |
| Styling | Tailwind CSS, Framer Motion |
| Database | Supabase (PostgreSQL) |
| AI | OpenAI (summarization), Jina AI (URL content extraction) |
| Deployment | Cloudflare Pages, Vercel |

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (default)/         # Main routes: home, categories, project detail
│   ├── (policy)/          # Privacy policy, Terms of service
│   └── api/               # API routes
├── templates/tailspark/   # UI templates & components
├── models/                # Supabase data access (project, category, user)
├── services/              # Business logic (project parsing, LLM, readers)
├── types/                 # TypeScript definitions
├── pagejson/              # Static content & metadata
└── data/                  # SQL schema (install.sql)
```

## Prerequisites

- Node.js v20 or newer
- pnpm
- A Supabase account

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/chatmcp/mcp-directory.git
cd mcp-directory
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up the database

Create a Supabase project and run the schema in `data/install.sql` via the Supabase SQL editor.

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
# Required — Supabase
SUPABASE_URL="your-supabase-project-url"
SUPABASE_ANON_KEY="your-supabase-anon-key"

# Required — App URL
NEXT_PUBLIC_WEB_URL="http://localhost:3000"

# Optional — AI summarization (for /api/summarize-project)
OPENAI_API_KEY="your-openai-api-key"
OPENAI_BASE_URL="https://api.openai.com/v1"
OPENAI_MODEL="gpt-4o-mini"
```

### 5. Run the development server

```bash
pnpm dev
```

Open localhost:3000 in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js dev server |
| `pnpm watch` | Start with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm pages:build` | Build for Cloudflare Pages |
| `pnpm preview` | Build and run Cloudflare Pages locally |
| `pnpm deploy` | Build and deploy to Cloudflare Pages |

## Deployment

### Cloudflare Pages

1. Add and configure `wrangler.toml` for the project.
2. Build and deploy:

```bash
pnpm deploy
```

### Vercel

```bash
vercel
```

## API

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/submit-project` | POST | Submit a new MCP project (JSON body) |
| `/api/submit-projects` | POST | Submit multiple projects |
| `/api/summarize-project` | POST | Trigger AI summarization for a project (body: `{ "name": "project-name" }`) |
| `/api/summarize-projects` | POST | Batch summarization |

## Community

- MCP Server Telegram
- MCP Server Discord
- ChatMCP Official Twitter

## About the author

- idoubi
- Twitter: idoubicv
- Buy me a coffee

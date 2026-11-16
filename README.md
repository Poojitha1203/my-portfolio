# My Portfolio

Personal developer portfolio.

## Tech stack

- **Frontend** (`client/`): React 19 + TypeScript, built with Vite
- **Backend** (`server/`): Node.js + Express 5 + TypeScript
- **Database**: not chosen yet

## Project structure

```
client/   React app (Vite dev server on http://localhost:5173)
server/   Express API (http://localhost:4000, routes under /api)
```

In development, Vite forwards any `/api/*` request to the Express server, so the frontend can call `fetch('/api/...')` directly.

## Getting started

Requires Node.js 22+.

```sh
npm install      # installs dependencies for both client and server
npm run dev      # starts client and server together
```

Other scripts:

| Command              | What it does                         |
| -------------------- | ------------------------------------ |
| `npm run dev:client` | Start only the frontend              |
| `npm run dev:server` | Start only the API                   |
| `npm run build`      | Production build of server and client |
| `npm run typecheck`  | Type-check both projects             |

Server settings are read from `server/.env` (see `server/.env.example`).

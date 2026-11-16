# My Portfolio

Personal developer portfolio.

## Tech stack

- **Frontend** (`client/`): React 19 + TypeScript, built with Vite
- **Backend** (`server/`): Node.js + Express 5 + TypeScript
- **Database**: Firebase Firestore (free Spark plan)

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
| `npm run seed`       | Upload portfolio data to Firestore   |

Server settings are read from `server/.env` (see `server/.env.example`).

## Portfolio data and Firebase

All content (certificates, education, skill certifications, profile links) lives in `client/src/data/`.
The site shows this built-in data straight away, and if Firebase is configured it loads the same
collections from Firestore instead. Without Firebase the site works exactly the same.

### Firebase project

- Project: **`poojitha-portfolio`** ([console](https://console.firebase.google.com/project/poojitha-portfolio/overview)), Firestore in `asia-south1` (Mumbai), free Spark plan.
- Collections: `certificates`, `credentials`, `education`, `links`. Anyone can read them and nobody can write from the browser (`firestore.rules`).
- `.firebaserc` points the Firebase CLI at this project.

### Local setup on a new machine

These files hold keys and are not in git:

1. `client/.env`: web app config. Get it with
   `firebase apps:sdkconfig WEB --project poojitha-portfolio`, or from Project settings → General → Your apps.
   Use the variable names in `client/.env.example`.
2. `server/firebase-service-account.json`: only needed to run `npm run seed`. Generate it in
   Project settings → Service accounts → *Generate new private key*, then copy `server/.env.example` to `server/.env`.

After changing `firestore.rules`, publish it with `firebase deploy --only firestore:rules`.

### Updating content

Edit the files in `client/src/data/`, then run `npm run seed` to update Firestore.

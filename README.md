# Connor Thompson — Personal Website

This repository contains my personal portfolio website. It introduces me and my work, links to my social profiles, presents selected projects, and provides an about page with a contact form and an embedded resume.

The website is a responsive Next.js application. Its homepage includes an animated introduction and a particle background. Project pages describe and, where available, embed demos of projects built with different technologies.

## What’s on the site

- **Home** (`/`) — Introduction, technology stack, and links to GitHub, LinkedIn, LeetCode, and the about page.
- **Projects** (`/projects`) — Portfolio cards linking to project write-ups and source repositories.
- **About** (`/about`) — Background information and a contact form.
- **Resume** (`/resume`) — Displays the resume PDF from the site’s public assets.
- **Project write-ups** — `/gantt`, `/matrixpracticer`, and `/groceryapp` describe an AI-assisted business planning tool, a matrix practice app, and an Android grocery list app.

The contact form sends messages through a Next.js API route using Nodemailer and Gmail. It requires server-side email credentials; see [Contact form configuration](#contact-form-configuration).

## Technology

The portfolio site is built with:

- **Next.js** and **React** for pages, routing, and UI
- **TypeScript** for application code
- **Tailwind CSS** and custom CSS for responsive styling and animation
- **tsParticles** for the animated homepage background
- **React Icons** for social and technology icons
- **Nodemailer** for the contact form’s email API

Some showcased projects use their own stacks, including Python/Flask, Kotlin, and Firebase. Those technologies belong to the projects being presented and are not dependencies of the portfolio frontend.

## Run locally

The Next.js app and its `package.json` are in the `client` directory.

1. Install [Node.js](https://nodejs.org/) (20.9 or later) and npm.
2. From the repository root, install dependencies and start the development server:

   ```bash
   cd client
   npm install
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

Useful commands, run from `client`:

```bash
npm run dev    # Start the local development server
npm run lint   # Run ESLint
npm run build  # Build the production site
npm run start  # Serve the production build
```

## Contact form configuration

To send messages from the contact form, create `client/.env.local` and set these server-only variables:

```dotenv
EMAIL_USER=your-gmail-address
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=destination-address
```

Use a Gmail app password for `EMAIL_PASS`, and do not commit real credentials. Without these values, the site can still run, but contact form submissions will report that email is not configured.

## Project layout

```text
client/
  public/             Images, icons, and the resume PDF
  src/
    components/       Shared site and project components
    lib/              Shared utilities
    pages/            Next.js Pages Router pages and API routes
      api/             Contact form email endpoint
  package.json        Scripts and dependencies
```

## Deployment

The app can be deployed to a Node.js host such as Vercel. Configure the contact form environment variables in the deployment environment if email sending is needed. The homepage uses Vercel URL environment variables to generate its Open Graph image URL when available.

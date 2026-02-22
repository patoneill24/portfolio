# Patrick O'Neill - Portfolio

A personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Email:** Resend
- **GitHub Stats:** react-github-calendar + GitHub REST API

## Getting Started

1. Install dependencies:

```bash
bun install
```

2. Create a `.env.local` file for the Resend API key (required for the contact form):

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Get your API key from [Resend](https://resend.com). Without it, the contact form will return an error when submitting.

3. Run the development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- **/** - Landing page with hero, GitHub stats, and skills
- **/experience** - Professional experience
- **/projects** - Project showcase
- **/contact** - Contact form (requires Resend API key)

## Deployment

Deploy to Vercel or any platform that supports Next.js. Add `RESEND_API_KEY` to your environment variables.

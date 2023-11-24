# f1-display
Creating a Formula 1 themed kiosk-like display to be used primarily (at least for now) for race reminders and countdowns.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, create a virtual environment for the Flask project:
```bash
python3 -m venv venv
```
This should trigger your IDE to automatically activate the necessary extensions and the virtual environment. If your IDE doesn’t do it automatically, open a terminal within the IDE and run `source venv/bin/activate` to manually activate the virtual environment.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

We use the [`concurrently`](https://www.npmjs.com/package/concurrently) package to run both Flask and Next.js development servers simultaneously. 


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open [http://localhost:3000/api/healthcheck](http://localhost:3000/api/healthcheck) to verify that the Flask server is up and running.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

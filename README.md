# Nate's Resume

This is a simple React + Vite site for showcasing an IT resume.

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```

## Cloudflare Pages Deployment

1. Build the static site
   ```bash
   npm run build
   ```
2. Preview the production build locally
   ```bash
   npm run preview
   ```
3. Deploy to Cloudflare Pages
   ```bash
   npm run deploy
   ```
   This uses `wrangler` to upload the `dist` folder defined in `wrangler.toml`.

The Vite config sets `base` to `./` so assets resolve correctly when hosted on Cloudflare.

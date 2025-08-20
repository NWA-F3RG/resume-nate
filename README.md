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
   This runs the local build and uses `wrangler` to upload the generated `dist` folder.

Cloudflare's dashboard can also build the project by running your `build` script;
`wrangler.toml` simply points Pages to the compiled output directory.

The Vite config sets `base` to `./` so assets resolve correctly when hosted on Cloudflare.

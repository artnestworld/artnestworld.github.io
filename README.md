# ArtNestWorld

Next.js App Router, TypeScript, and plain CSS. Shared components live in `components/`; experience data and journal content are easy to extend.

## Develop

Run `npm install`, then `npm run dev`. Open http://localhost:3000.

Run `npm run typecheck` and `npm run build` to validate. The build exports a static website to `out/`, suitable for GitHub Pages. Deploy the contents of `out/` (including `_next`) and include `.nojekyll`.

## Content before launch

The photographs are illustrative Unsplash images, not photos of the client’s premises. Replace `public/images/` with approved client photos. The homepage uses public/images/home-placeholder.jpg as a dummy image; replace it with the approved client photograph. Journal entries are starter editorial content, not reports of real events.

Confirm the apartment amenities, guest capacity, booking policies, prices, address, cafe menu, opening hours, and walk schedule with the client. None of these unconfirmed details are advertised as facts. The enquiry form prepares a message to copy and send via the supplied artist Instagram; it does not submit or reserve a booking. Change that contact destination in `components/SiteChrome.tsx` when the client provides one.

Visual research: https://www.artosanstudio.com/about . Fonts: DM Sans and Kalam from Google Fonts, with local fallbacks. No backend or payment integration is included.


## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` runs on pushes to `main`, or manually from the Actions tab. It installs locked dependencies using `npm ci`, checks TypeScript, builds the static `out/` directory, verifies the main pages, and deploys using GitHub's Pages artifact actions.

1. Push the source code and `package-lock.json` to `artnestworld/artnestworld.github.io`.
2. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. Keep **artnestworld.com** configured as the custom domain in Settings → Pages, with the domain's DNS pointed at GitHub Pages. Enable **Enforce HTTPS** once GitHub makes it available.
4. Open the **Actions** tab to follow **Deploy to GitHub Pages**. Future pushes to `main` rebuild and deploy automatically.

Both `artnestworld.github.io` and the custom domain host this repository at `/`, so no repository-name `basePath` is needed. The workflow copies the root `CNAME` into the exported website; update that file and the Pages custom-domain setting when changing the domain. The workflow deploys `out/`; the old root `index.html` is not used.

No personal access token, server, or separately committed build output is required. GitHub supplies the deployment token. The first successful workflow run confirms the live deployment.


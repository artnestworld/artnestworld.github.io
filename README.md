# ArtNestWorld

Next.js App Router, TypeScript, and plain CSS. Shared components live in `components/`; experience data and journal content are easy to extend.

## Develop

Run `npm install`, then `npm run dev`. Open http://localhost:3000.

Run `npm run typecheck` and `npm run build` to validate. The build exports a static website to `out/`, suitable for GitHub Pages. Deploy the contents of `out/` (including `_next`) and include `.nojekyll`.

## Content before launch

The photographs are illustrative Unsplash images, not photos of the client’s premises. Replace `public/images/` with approved client photos. The homepage uses public/images/home-placeholder.jpg as a dummy image; replace it with the approved client photograph. Journal entries are starter editorial content, not reports of real events.

Confirm the apartment amenities, guest capacity, booking policies, prices, address, cafe menu, opening hours, and walk schedule with the client. None of these unconfirmed details are advertised as facts. The enquiry form prepares a message to copy and send via the supplied artist Instagram; it does not submit or reserve a booking. Change that contact destination in `components/SiteChrome.tsx` when the client provides one.

Visual research: https://www.artosanstudio.com/about . Fonts: DM Sans and Kalam from Google Fonts, with local fallbacks. No backend or payment integration is included.


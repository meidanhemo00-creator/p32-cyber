# P32 Cyber Intelligence & Exposure

Standalone site for P32's cyber practice, split from the company site
(p32.ltd, repo `p32-landing-02`) in October 2026. Next.js static export into
`out/`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

The domain is not chosen yet: `siteUrl` in `app/layout.tsx` is a
placeholder until it is. Links back to the company site use `MAIN_SITE` in
`lib/content.ts`.

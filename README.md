# P32 Cyber Intelligence & Exposure

Standalone site for P32's cyber practice, split from the company site
(p32.ltd, repo `p32-landing-02`) in October 2026. Next.js static export into
`out/`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

Domain: https://cyber.p32.ltd (`siteUrl` in `app/layout.tsx`). Links back to the company site use `MAIN_SITE` in
`lib/content.ts`.

## Hosting

GitHub Pages, custom domain https://cyber.p32.ltd. Every push to `main`
deploys through `.github/workflows/deploy-pages.yml`. DNS for p32.ltd is at
Namecheap: CNAME `cyber` -> `meidanhemo00-creator.github.io`.

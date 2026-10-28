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

## Going live on cyber.p32.ltd

Same setup as the company site (Firebase project `p32-ltd`); pushing to
`main` runs `.github/workflows/deploy-firebase.yml`. One-time setup by
whoever owns the Firebase project and the p32.ltd DNS (Namecheap):

1. Create the GitHub repository and push this folder to it.
2. Firebase console, project `p32-ltd` > Hosting > Add another site:
   `p32-cyber`.
3. On that site, Add custom domain `cyber.p32.ltd`; add the DNS records
   Firebase shows at Namecheap (Advanced DNS for p32.ltd).
4. Let the new repository use the deploy identity: in Google Cloud > IAM >
   Workload Identity Federation, provider `p32-site`, widen the attribute
   condition to include the new repository.

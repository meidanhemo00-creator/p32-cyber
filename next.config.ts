import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export into `out/` — served by GitHub Pages at cyber.p32.ltd.
  output: "export",
  // The default next/image loader needs a server; a static export has none.
  images: { unoptimized: true },
};

export default nextConfig;

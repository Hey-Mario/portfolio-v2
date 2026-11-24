import type { NextConfig } from "next"

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
]

const day = 60 * 60 * 24

/** Browser cache + CDN cache, refreshed in the background once stale. */
const cache = (browser: number, cdn: number, swr: number) => [
  {
    key: "Cache-Control",
    value: `public, max-age=${browser}, s-maxage=${cdn}, stale-while-revalidate=${swr}`,
  },
]

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Images and PDFs keep their file name, so refresh them in the background rather than pin them.
      { source: "/images/:path*", headers: cache(7 * day, 30 * day, day) },
      { source: "/cv/:path*", headers: cache(day, 7 * day, day) },
      // Social share images are rendered on demand; their URLs carry a content hash, so cache them hard.
      {
        source: "/:locale(en|fr)/:image(opengraph-image|twitter-image)",
        headers: cache(7 * day, 30 * day, day),
      },
      { source: "/:file(robots.txt|sitemap.xml)", headers: cache(day, 7 * day, day) },
      {
        source: "/:file(favicon.ico|icon.png|apple-icon.png|manifest.webmanifest)",
        headers: cache(day, 7 * day, day),
      },
    ]
  },
}

export default nextConfig

import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.shortName,
    short_name: "Mario R.",
    description: "Full-stack engineer building SaaS and marketplace platforms.",
    start_url: "/en",
    display: "standalone",
    background_color: "#fcfcfa",
    theme_color: "#fcfcfa",
    icons: [
      { src: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  }
}

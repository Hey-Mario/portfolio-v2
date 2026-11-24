import { ImageResponse } from "next/og"

import { getContent } from "@/content"
import { defaultLocale, isLocale } from "@/i18n/config"
import { siteConfig } from "@/lib/site"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Mario Randriamanantena — Full-stack engineer"

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: param } = await params
  const locale = isLocale(param) ? param : defaultLocale
  const { hero } = getContent(locale)

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#fcfcfa",
        color: "#16171d",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 14,
            background: "#16171d",
            color: "#fcfcfa",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          MR
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 30, fontWeight: 700 }}>{siteConfig.shortName}</span>
          <span style={{ fontSize: 24, color: "#0f7f86" }}>{hero.role}</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 60,
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: -1.5,
        }}
      >
        {hero.title}
      </div>

      <div
        style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#5b5e6b" }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#10b981" }} />
        {hero.availability}
      </div>
    </div>,
    size,
  )
}

import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { getContent } from "@/content"
import { defaultLocale, isLocale } from "@/i18n/config"
import { splitHighlights } from "@/lib/highlight"
import { siteConfig } from "@/lib/site"

import { locales } from "@/i18n/config"

/** Pre-render one image per language at build time so they are served from cache. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Mario Randriamanantena — Full-stack engineer for SaaS and marketplaces"

const asDataUri = async (file: string, mime: string) =>
  `data:${mime};base64,${(await readFile(join(process.cwd(), "public/images", file))).toString("base64")}`

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: param } = await params
  const locale = isLocale(param) ? param : defaultLocale
  const { hero } = getContent(locale)
  const [logo, photo] = await Promise.all([
    asDataUri("logo-mr.png", "image/png"),
    asDataUri("headshot-og.jpg", "image/jpeg"),
  ])
  // Whitespace-separated words, each split again so punctuation stays glued to its word.
  const words = hero.title
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => splitHighlights(word, hero.highlights))

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#fcfcfa",
        color: "#16171d",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Soft brand glow in the corner, echoing the site's hero. */}
      <div
        style={{
          position: "absolute",
          top: -220,
          right: -140,
          width: 640,
          height: 640,
          borderRadius: 320,
          background: "linear-gradient(135deg, #2563eb33, #00e5ff22)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: "64px 0 64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#ffffff",
              border: "1px solid #e5e5e0",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt="" width={50} height={50} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>{siteConfig.shortName}</span>
            <span style={{ fontSize: 24, color: "#0f7f86" }}>{hero.role}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -1.5,
            maxWidth: 640,
          }}
        >
          {words.map((parts, index) => (
            <span key={index} style={{ display: "flex", marginRight: 16 }}>
              {parts.map((part, partIndex) => (
                <span key={partIndex} style={{ color: part.highlighted ? "#2563eb" : "#16171d" }}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              color: "#5b5e6b",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#10b981" }} />
            {hero.availability}
          </div>
          <span style={{ fontSize: 22, color: "#8a8d99" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", padding: "0 72px 0 48px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          width={320}
          height={400}
          style={{ borderRadius: 24, border: "6px solid #ffffff", boxShadow: "0 20px 50px #0003" }}
        />
      </div>
    </div>,
    size,
  )
}

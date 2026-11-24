import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

test.describe("routing", () => {
  test("redirects / to the visitor's preferred language", async ({ browser }) => {
    const fr = await browser.newContext({ locale: "fr-FR" })
    const page = await fr.newPage()
    await page.goto("/")
    await expect(page).toHaveURL(/\/fr$/)
    await fr.close()
  })

  test("serves both locales with the right language attribute", async ({ page }) => {
    for (const locale of ["en", "fr"]) {
      await page.goto(`/${locale}`)
      await expect(page.locator("html")).toHaveAttribute("lang", locale)
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    }
  })

  test("returns a localized 404 for unknown pages", async ({ page }) => {
    const response = await page.goto("/fr/does-not-exist")
    expect(response?.status()).toBe(404)
    await expect(page.getByRole("heading", { name: "Page introuvable" })).toBeVisible()
  })
})

test.describe("interactions", () => {
  test("switches language and keeps the current section", async ({ page, isMobile }) => {
    await page.goto("/en#projects")
    await page.getByRole("link", { name: "Passer le site en français" }).click()
    await expect(page).toHaveURL(/\/fr#projects$/)
    await expect(page.locator("html")).toHaveAttribute("lang", "fr")
    test.info().annotations.push({ type: "viewport", description: isMobile ? "mobile" : "desktop" })
  })

  test("toggles dark mode", async ({ page }) => {
    await page.goto("/en")
    const html = page.locator("html")
    const wasDark = ((await html.getAttribute("class")) ?? "").includes("dark")
    await page.getByRole("button", { name: "Toggle dark mode" }).click()
    if (wasDark) await expect(html).not.toHaveClass(/dark/)
    else await expect(html).toHaveClass(/dark/)
  })

  test("opens and closes a project's details", async ({ page }) => {
    await page.goto("/en#projects")
    await page.getByRole("button", { name: "Details: Lavanty.online" }).click()
    const dialog = page.getByRole("dialog", { name: "Lavanty.online" })
    await expect(dialog).toBeVisible()
    await expect(dialog.getByText("What I worked on")).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(dialog).toBeHidden()
  })

  test("validates the contact form before sending", async ({ page }) => {
    await page.goto("/en#contact")
    await page.getByRole("button", { name: "Send message" }).click()
    await expect(page.getByText("Please enter your name.")).toBeVisible()
    await expect(page.getByText("Please enter a valid email address.")).toBeVisible()
  })

  test("opens the mobile menu", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile only")
    await page.goto("/en")
    await page.getByRole("button", { name: "Open menu" }).click()
    await page.getByRole("dialog").getByRole("link", { name: "Experience" }).click()
    await expect(page).toHaveURL(/#experience$/)
  })
})

test.describe("accessibility", () => {
  for (const locale of ["en", "fr"]) {
    for (const colorScheme of ["light", "dark"] as const) {
      test(`has no serious axe violations (${locale}, ${colorScheme})`, async ({ page }) => {
        await page.emulateMedia({ colorScheme, reducedMotion: "reduce" })
        await page.goto(`/${locale}`)
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze()
        const serious = results.violations.filter((v) =>
          ["serious", "critical"].includes(v.impact ?? ""),
        )
        expect(
          serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`),
        ).toEqual([])
      })
    }
  }
})

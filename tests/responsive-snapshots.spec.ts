import { mkdir } from "node:fs/promises";
import path from "node:path";

import { test } from "@playwright/test";

const viewports = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768-portrait", width: 768, height: 1024 },
  { name: "desktop-1440", width: 1440, height: 1600 },
  { name: "desktop-1920", width: 1920, height: 1800 },
];

test.describe("responsive homepage snapshots", () => {
  for (const viewport of viewports) {
    test(`capture ${viewport.name}`, async ({ page, baseURL }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });

      await page.goto(baseURL ?? "/", { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        await document.fonts.ready;
      });
      await page.locator("body").waitFor({ state: "visible" });

      const outputDir = path.join(process.cwd(), "playwright-artifacts", "responsive");
      await mkdir(outputDir, { recursive: true });

      await page.screenshot({
        path: path.join(outputDir, `${viewport.name}.png`),
        fullPage: true,
      });
    });
  }
});

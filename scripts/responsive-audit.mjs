import { chromium } from "playwright-core";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.AUDIT_BASE_URL ?? "http://127.0.0.1:3000";
const chromePath =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const widths = [320, 375, 390, 414, 768, 1024, 1280, 1440, 1920];
const routes = [
  "/",
  "/about",
  "/services",
  "/shop",
  "/blog",
  "/contact",
  "/home-two",
  "/home-three",
  "/home-one-onepage",
  "/home-two-onepage",
  "/home-three-onepage",
  "/team",
  "/team-details",
  "/projects",
  "/project-details",
  "/testimonials",
  "/faq",
  "/404",
  "/services-v-1",
  "/services-v-2",
  "/services-v-3",
  "/rim-wheel-repair",
  "/lights-accessories",
  "/brake-repair",
  "/engine-diagnosis",
  "/battery-solution",
  "/emergency-service",
  "/products",
  "/product-details",
  "/cart",
  "/checkout",
  "/wishlist",
  "/sign-up",
  "/login",
  "/blog-standard",
  "/blog-details",
];

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--disable-gpu", "--hide-scrollbars"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const results = [];

for (const route of routes) {
  const response = await page.goto(`${baseUrl}${route}`, {
    waitUntil: "domcontentloaded",
    timeout: 30_000,
  });

  for (const width of widths) {
    await page.setViewportSize({ width, height: width <= 414 ? 844 : 900 });
    await page.waitForTimeout(80);

    const audit = await page.evaluate(() => {
      const viewportWidth = document.documentElement.clientWidth;
      const all = Array.from(document.querySelectorAll("body *"));
      const selectorFor = (element) => {
        const id = element.id ? `#${element.id}` : "";
        const classes =
          typeof element.className === "string"
            ? element.className
                .trim()
                .split(/\s+/)
                .filter(Boolean)
                .slice(0, 3)
                .map((name) => `.${CSS.escape(name)}`)
                .join("")
            : "";
        return `${element.tagName.toLowerCase()}${id}${classes}`;
      };

      const visible = all.filter((element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          Number(style.opacity) > 0 &&
          !element.closest(
            '[aria-hidden="true"], .mobile-panel:not(.open), .info-drawer:not(.open), .search-overlay:not(.open), .panel-overlay:not(.open)',
          ) &&
          rect.width > 1 &&
          rect.height > 1
        );
      });

      const overflowCandidates = visible
        .map((element) => {
          const rect = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return {
            selector: selectorFor(element),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            position: style.position,
            overflowX: style.overflowX,
          };
        })
        .filter(
          (item) =>
            item.right > viewportWidth + 2 ||
            item.left < -2 ||
            item.width > viewportWidth + 2,
        )
        .slice(0, 25);

      const internalOverflows = visible
        .filter(
          (element) =>
            element.scrollWidth > element.clientWidth + 2 &&
            getComputedStyle(element).overflowX === "visible" &&
            !element.matches("svg, svg *, path") &&
            !element.closest(".clone-carousel, .marquee, .cart-table"),
        )
        .map((element) => ({
          selector: selectorFor(element),
          clientWidth: element.clientWidth,
          scrollWidth: element.scrollWidth,
        }))
        .slice(0, 25);

      const images = Array.from(document.images);
      const brokenImages = images
        .filter((image) => image.complete && image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src)
        .slice(0, 20);
      const distortedImages = images
        .filter((image) => {
          if (!image.naturalWidth || !image.naturalHeight) return false;
          const rect = image.getBoundingClientRect();
          if (rect.width < 2 || rect.height < 2) return false;
          const naturalRatio = image.naturalWidth / image.naturalHeight;
          const renderedRatio = rect.width / rect.height;
          const objectFit = getComputedStyle(image).objectFit;
          return (
            objectFit === "fill" &&
            Math.abs(naturalRatio - renderedRatio) / naturalRatio > 0.08
          );
        })
        .map((image) => selectorFor(image))
        .slice(0, 20);

      const controlsTooSmall = visible
        .filter((element) => element.matches("button, a, input, select, textarea"))
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          return rect.width < 40 || rect.height < 40;
        })
        .map((element) => selectorFor(element))
        .slice(0, 25);

      window.scrollTo({ left: 99_999, top: window.scrollY, behavior: "instant" });
      const reachableHorizontalScroll = window.scrollX;
      window.scrollTo({ left: 0, top: window.scrollY, behavior: "instant" });

      return {
        viewportWidth,
        bodyScrollWidth: document.body.scrollWidth,
        rootScrollWidth: document.documentElement.scrollWidth,
        reachableHorizontalScroll,
        documentHeight: document.documentElement.scrollHeight,
        overflowCandidates,
        internalOverflows,
        brokenImages,
        distortedImages,
        controlsTooSmall,
      };
    });

    results.push({
      route,
      width,
      status: response?.status() ?? null,
      ...audit,
    });
  }
}

await browser.close();

const failures = results.filter(
  (result) =>
    result.status !== 200 ||
    result.rootScrollWidth > result.viewportWidth + 2 ||
    result.reachableHorizontalScroll > 1 ||
    result.brokenImages.length > 0 ||
    result.distortedImages.length > 0,
);

const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  routes,
  widths,
  totalChecks: results.length,
  failureCount: failures.length,
  failures,
  results,
};

const outputPath = path.resolve(".codex", "responsive-audit.json");
await writeFile(outputPath, JSON.stringify(report, null, 2));

console.log(
  JSON.stringify(
    {
      outputPath,
      totalChecks: report.totalChecks,
      failureCount: report.failureCount,
    },
    null,
    2,
  ),
);

if (failures.length > 0) {
  process.exitCode = 1;
}

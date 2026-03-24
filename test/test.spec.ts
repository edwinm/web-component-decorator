import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/test/index.html");
  await page.addScriptTag({
    url: "/test-dist/test/test-component.js",
    type: "module",
  });
  await page.evaluate(() => customElements.whenDefined("test-button"));
  await page.evaluate(() => {
    document.body.innerHTML = "<test-button id='button'>Click me</test-button>";
  });
});

test("Test attribute on function", async ({ page }) => {
  await page
    .locator("test-button#button")
    .evaluate((el: any) => el.setAttribute("icon", "close"));
  expect(await page.locator("test-button#button").getAttribute("icon")).toBe(
    "close"
  );
  expect(
    await page.locator("test-button#button").evaluate((el: any) => el.getIcon())
  ).toBe("close");
});

test("Test attribute on setter", async ({ page }) => {
  await page
    .locator("test-button#button")
    .evaluate((el: any) => el.setAttribute("size", "10"));
  expect(await page.locator("test-button#button").getAttribute("size")).toBe(
    "10"
  );
  expect(
    await page.locator("test-button#button").evaluate((el: any) => el.getSize())
  ).toBe("10");
});

const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://www.idealista.ag/');
  const title = page.locator('head > title');
  await expect(title).toHaveText('idealista — Casas y pisos, alquiler y venta. Anuncios gratis');
  const name = await page.innerText('#draw-your-search-button > span > span.draw-search-h3');
  expect(name).toBe('Dibujar tu zona de búsqueda');
});
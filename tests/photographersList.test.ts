import { test, expect } from '@playwright/test';

test('create delete photographer', async ({ page }) => {
    await page.goto('/');
    await page.locator('input[name="firstName"]').click();
    await page.locator('input[name="firstName"]').fill('Фотограф');
    await page.locator('input[name="lastName"]').click();
    await page.locator('input[name="lastName"]').fill('Фотографов');
    await page.getByRole('button', { name: 'Добавить' }).click();
    await expect(page.getByText('ФотографФотографов')).toBeVisible();
    await page
        .locator('div')
        .filter({ hasText: /^ФотографФотографовCard ContentУдалить$/ })
        .getByRole('button')
        .click();
    await expect(page.getByText('ФотографФотографов')).not.toBeVisible();
});

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom-pages/LoginPage';

test.describe('Login tests', () => {

  test('Successful login - standard_user', async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.login('standard_user', 'secret_sauce');

    await expect(login.inventoryHeader()).toHaveText('Products');
  });

  test('Unsuccessful login - locked_out_user', async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.login('locked_out_user', 'secret_sauce');

    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(
      'Epic sadface: Sorry, this user has been locked out.'
    );
  });

});

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom-pages/LoginPage';
import { InventoryPage } from '../pom-pages/InventoryPage';
import { CartPage } from '../pom-pages/CartPage';
import { CheckoutPage } from '../pom-pages/CheckoutPage';

test('Full purchase flow on SauceDemo using Builder pattern', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');

  await expect(login.inventoryHeader()).toHaveText('Products');

  await inventory.addProductToCart('Sauce Labs Backpack');
  await inventory.goToCart();

  await expect(cart.cartItem('Sauce Labs Backpack')).toBeVisible();

  await cart.proceedToCheckout();

  await checkout.fillForm('Jan', 'Kowalski', '00-001');
  await checkout.finish();

  await expect(checkout.successMessage())
    .toHaveText('Thank you for your order!');
});

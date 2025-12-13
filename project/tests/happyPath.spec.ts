import { test } from '@playwright/test';
import { LoginPage } from '../pom-pages/LoginPage';
import { CartPage } from '../pom-pages/CartPage';
import { CheckoutPage } from '../pom-pages/CheckoutPage';

test('happy path POM', async ({ page }) => {
  const login = new LoginPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await cart.goToCheckout();
  await checkout.fillForm('Jan', 'Kowalski', '00-001');
  await checkout.finish();
});
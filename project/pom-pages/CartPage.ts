import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  cartItem(name: string) {
    return this.page.locator('.cart_item', { hasText: name });
  }

  async proceedToCheckout() {
    await this.page.click('[data-test="checkout"]');
  }
}

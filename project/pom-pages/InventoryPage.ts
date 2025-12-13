import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  private productItem = (name: string) =>
    this.page.locator('.inventory_item_name', { hasText: name });

  async addProductToCart(productName: string) {
    await this.productItem(productName)
      .locator('button', { hasText: 'Add to cart' })
      .click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}

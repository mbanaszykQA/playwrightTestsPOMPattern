import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  private successHeader = '.complete-header';

  async fillForm(first: string, last: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }

  async finish() {
    await this.page.click('[data-test="finish"]');
  }

  successMessage() {
    return this.page.locator(this.successHeader);
  }
}

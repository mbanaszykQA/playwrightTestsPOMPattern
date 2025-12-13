import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private username = '#user-name';
  private password = '#password';
  private loginButton = '#login-button';
  private inventoryTitle = '.title';

  async open() {
    await this.page.goto('"https://www.saucedemo.com/"');
  }

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginButton);
  }

  inventoryHeader() {
    return this.page.locator(this.inventoryTitle);
  }
}

import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private username = '#user-name';
  private password = '#password';
  private loginButton = '#login-button';

  async open() {
    await this.page.goto('/');
  }

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginButton);
  }
}
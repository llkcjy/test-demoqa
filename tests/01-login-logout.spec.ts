// tests/01-login-logout.spec.ts
import { test, expect } from '@playwright/test';

// 策略：用户名作为公开的测试数据，清晰明了
const USERNAME = 'eliBug';

// 策略：密码作为机密信息，必须从环境变量中读取
const password = process.env.DEMOQA_PASSWORD;

test.describe('Feature: User Login and Logout', () => {
  const LOGIN_URL = 'https://demoqa.com/login';

  // 在所有测试开始前，执行一次健全性检查
  test.beforeAll(() => {
    if (!password) {
      throw new Error('测试中止：环境变量 DEMOQA_PASSWORD 未设置。请提供有效的密码来运行测试。');
    }
  });

  // 正向用例：成功登录与登出
  test('TC-01: Successful login and logout flow', async ({ page }) => {
    await page.goto(LOGIN_URL);

    // 步骤1: 输入凭证并登录
    await page.locator('#userName').fill(USERNAME);
    await page.locator('#password').fill(password!); // 使用非空断言!，因为beforeAll已检查
    await page.locator('#login').click();

    // 步骤2: 验证登录成功
    await page.waitForURL('**/profile');
    expect(page.url()).toContain('/profile');
    await expect(page.locator('#userName-value')).toHaveText(USERNAME);

    const logoutButton = page.getByRole('button', { name: 'Log out' });
    await expect(logoutButton).toBeVisible();

    // 步骤3: 执行登出并验证
    await logoutButton.click();
    await page.waitForURL('**/login');
    expect(page.url()).toContain('/login');
    await expect(page.locator('#userName')).toBeVisible();
  });

  // 负向用例：无效凭证
  test('TC-02: Login with invalid credentials', async ({ page }) => {
    await page.goto(LOGIN_URL);

    await page.locator('#userName').fill('invalidUser');
    await page.locator('#password').fill('invalidPassword');
    await page.locator('#login').click();

    const errorMessage = page.locator('#name');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid username or password!');
    expect(page.url()).toContain('/login');
  });

  // 负向用例：空凭证，精确验证CSS类
  test('TC-03: Login attempt with empty credentials triggers validation class', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.locator('#login').click();

    // 验证：输入框是否被赋予了 'is-invalid' 类
    const userNameInput = page.locator('#userName');
    await expect(userNameInput).toHaveClass(/is-invalid/);

    const passwordInput = page.locator('#password');
    await expect(passwordInput).toHaveClass(/is-invalid/);
  });
});

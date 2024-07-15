import registration_user_data from '../all_data/registration_user_data.json';
import flash_data from '../all_data/flash_data.json';
const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pages/registration.page');
const { Page } = require('../pages/page');
const { MainPage } = require('../pages/main.page');

test.describe('Registration', () => {
  let mainPage;
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await expect(page).toHaveURL('/');
  });

  test('Registration with invalid email', async ({ page }) => {
    mainPage = new MainPage(page);
    registrationPage = new RegistrationPage(page);
    await mainPage.clickRegistrationButton();
    await expect(page).toHaveURL('/account/register');
    await registrationPage.fillRegistrationUserValue(
      registration_user_data.login,
      registration_user_data.password,
      registration_user_data.firstName,
      registration_user_data.lastName,
      registration_user_data.email
    );
    await page.waitForLoadState('load');
    const errorMessages = await registrationPage.getErrorMessages();
    await expect(errorMessages).toContain(flash_data.emailError);
  });
});

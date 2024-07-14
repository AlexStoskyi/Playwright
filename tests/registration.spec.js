const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pages/registration.page');
const { Page } = require('../pages/page');
const { MainPage } = require('../pages/main.page');

let mainPage;
let registrationPage;

const strona = 'https://www.redmine.org/';
test.describe('Registration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await expect(page).toHaveURL(strona);
  });

  test('Registration with invalid email', async ({ page }) => {
    mainPage = new MainPage(page);
    registrationPage = new RegistrationPage(page);
    await mainPage.clickRegistrationButton();
    await expect(page).toHaveURL('/account/register');
    // await registrationPage.fillUserValue()
    await registrationPage.fillUserValue(
      'testers1',
      'test1234',
      '111',
      '222',
      'testgmail.com'
    );
    await page.waitForLoadState('load');
    const errorMessage = await registrationPage.getInnerFromElement();
    console.log(errorMessage);
    await expect(errorMessage).toContain('Email cannot be blank');
  });
});

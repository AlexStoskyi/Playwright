import flash_data from '../all_data/flash_data.json';
import login_user_data from '../all_data/login_user_data.json';
const { test, expect } = require('@playwright/test');
const { Page } = require('../pages/page');
const { MainPage } = require('../pages/main.page');
const { SingInPage } = require('../pages/singIn.page');

const USER_LOGIN = login_user_data.login;
const USER_PASSWORD = login_user_data.password;

test.describe('Sing out', () => {
  let singInPage;
  let mainPage;
  let pagePage;

  test.beforeEach(async ({ page }) => {
    pagePage = new Page(page);
    mainPage = new MainPage(page);
    singInPage = new SingInPage(page);
    await pagePage.openUrl();
    await expect(page).toHaveURL('/');
  });

  test('Sing In and sing out', async ({ page }) => {
    await singInPage.signIn(page, USER_LOGIN, USER_PASSWORD);
    const LoggedAsMessage = await mainPage.getMessageLoggedAs();
    expect(LoggedAsMessage).toContain(flash_data.loginMessage + USER_LOGIN);
    await mainPage.clickSingOutButton();
    const singInButton = await mainPage.getSingInButton();
    await expect(singInButton).toBeVisible();
  });
});

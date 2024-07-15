import flash_data from '../all_data/flash_data.json';
import login_user_data from '../all_data/login_user_data.json';
const { test, expect } = require('@playwright/test');
const { Page } = require('../pages/page');
const { MainPage } = require('../pages/main.page');
const { SingInPage } = require('../pages/singIn.page');
const { MyAccountPage } = require('../pages/myAccount.page');

const USER_LOGIN = login_user_data.login;
const USER_PASSWORD = login_user_data.password;

test.describe('Change User Value', () => {
  let singInPage;
  let mainPage;
  let pagePage;
  let myAccountPage;

  test.beforeEach(async ({ page }) => {
    pagePage = new Page(page);
    mainPage = new MainPage(page);
    singInPage = new SingInPage(page);
    await pagePage.openUrl();
    await expect(page).toHaveURL('/');
  });

  test('Cheng First name on My account page', async ({ page }) => {
    myAccountPage = new MyAccountPage(page);
    await singInPage.signIn(page, USER_LOGIN, USER_PASSWORD);
    await mainPage.clickMyAccountButton();
    await myAccountPage.fillUserNameValue(
      USER_LOGIN + Math.floor(Math.random() * 100)
    );
    const successfulMessage = await myAccountPage.getSuccessMessages();

    expect(successfulMessage).toContain(flash_data.updateMessage);
  });
});

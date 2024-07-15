const { Page } = require('./page');
const { MainPage } = require('./main.page');

const loginField = '#username';
const passwordField = '#password';
const loginSubmitButton = '#login-submit';
const flashError = '#flash_error';

class SingInPage extends Page {
  constructor(page) {
    super(page);
    this.page = page;
  }

  async getFlashField() {
    await super.getElement(flashError);
  }
  async getFlashErrorMessages() {
    return await this.page.$$eval(flashError, (elements) =>
      elements.map((element) => element.textContent.trim())
    );
  }

  async signIn(page, login, password) {
    const mainPage = new MainPage(page);
    await mainPage.clickSingInButton();
    await (await super.getElement(loginField)).fill(login);
    await (await super.getElement(passwordField)).fill(password);
    await super.clickElement(loginSubmitButton);
  }
}

module.exports = { SingInPage };

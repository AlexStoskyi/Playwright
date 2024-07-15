const { Page } = require('./page');
const homePage = '.home';
const registrationButton = '.register';
const singInButton = '.login';
const singOutButton = '.logout';
const loggedAsValue = '#loggedas';
const myAccountButton = '.my-account';

class MainPage extends Page {
  constructor(page) {
    super(page);
    this.page = page;
  }
  async getMessageLoggedAs() {
    return await this.page.$$eval(loggedAsValue, (elements) =>
      elements.map((element) => element.textContent.trim())
    );
  }

  async getSingOutButton() {
    await super.getElement(singOutButton);
  }

  async clickMyAccountButton() {
    await super.clickElement(myAccountButton);
  }

  async clickSingInButton() {
    await super.clickElement(singInButton);
  }

  async clickRegistrationButton() {
    await super.clickElement(registrationButton);
  }

  async clickHomePageButton() {
    await super.clickElement(homePage);
  }
}

module.exports = { MainPage };

const { Page } = require('./page');
const homePage = '.home';
const registrationButton = '.register';
const catalogContainer = '.Catalog_container__0jVbE';
const firstCategoryLabel = 'label[for="category1"]';

class MainPage extends Page {
  constructor(page) {
    super(page);
    this.page = page;
  }

  async getCatalogContainer() {
    return await super.getElement(catalogContainer);
  }

  async getFirstCategoryLabel() {
    return await super.getElement(firstCategoryLabel);
  }

  async clickHomePageButton() {
    await super.clickElement(homePage);
  }
  async clickRegistrationButton() {
    await super.clickElement(registrationButton);
  }
}

module.exports = { MainPage };

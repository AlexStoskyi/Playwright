const { Page } = require('./page');

const firstNameField = '#user_firstname';
const saveButton = "p[class='mobile-hide'] input[name='commit']";
const flashMessage = '#flash_notice';

class MyAccountPage extends Page {
  constructor(page) {
    super(page);
    this.page = page;
  }
  async fillUserNameValue(firstName) {
    await (await super.getElement(firstNameField)).fill(firstName);
    await super.clickElement(saveButton);
  }

  async getSuccessMessagesText() {
    return await super.getElement(flashMessage);
  }

  async getSuccessMessages() {
    return await this.page.$$eval(flashMessage, (elements) =>
      elements.map((element) => element.textContent.trim())
    );
  }
}

module.exports = { MyAccountPage };

const { Page } = require('./page');

const loginField = '#user_login';
const passwordField = '#user_password';
const confirmationField = '#user_password_confirmation';
const firstNameField = '#user_firstname';
const lastNameField = '#user_lastname';
const emailField = '#user_mail';
const submitButton = 'input[value= Submit]';
const errorMessageBoard = "div[id='errorExplanation'] ul li";

class RegistrationPage extends Page {
  constructor(page) {
    super(page);
    this.page = page;
  }

  async getErrorMessages() {
    return await this.page.$$eval(errorMessageBoard, (elements) =>
      elements.map((element) => element.textContent.trim())
    );
  }

  async fillRegistrationUserValue(login, password, firstName, lastName, email) {
    await (await super.getElement(loginField)).fill(login);
    await (await super.getElement(passwordField)).fill(password);
    await (await super.getElement(confirmationField)).fill(password);
    await (await super.getElement(firstNameField)).fill(firstName);
    await (await super.getElement(lastNameField)).fill(lastName);
    await (await super.getElement(emailField)).fill(email);
    await super.clickElement(submitButton);
  }
}

module.exports = { RegistrationPage };

const { Page } = require('./page');

const loginField = '#user_login';
const passwordField = '#user_password';
const confirmationField = '#user_password_confirmation';
const firstNameField = '#user_firstname';
const lastNameField = '#user_lastname';
const emailField = '#user_mail';
const submitButton = 'input[value= Submit]';
const errorMessageBoard = '#errorExplanation';

class RegistrationPage extends Page {
  constructor(page) {
    super(page);
    this.page = page;
  }

  async getUserField() {
    await super.getElement(loginField);
  }

  async getErrorBoard() {
    await super.getValue(errorMessageBoard);
  }

  async getInnerFromElement() {
    (await super.getElement(errorMessageBoard)).innerText();
  }

  async fillUserValue(login, password, firstName, lastName, email) {
    await (await super.fillElement(loginField)).fill(login);
    await (await super.fillElement(passwordField)).fill(password);
    await (await super.fillElement(confirmationField)).fill(password);
    await (await super.fillElement(firstNameField)).fill(firstName);
    await (await super.fillElement(lastNameField)).fill(lastName);
    await (await super.fillElement(emailField)).fill(email);
    await super.clickElement(submitButton);
  }
}

module.exports = { RegistrationPage };

class Page {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }
  async openMainUrl() {
    return await super.openUrl('/');
  }
  async openUrl(url) {
    await this.page.goto(url == undefined ? '/' : url);
    await this.page.waitForLoadState('load');
  }

  async getElement(element) {
    return await this.page.locator(element);
  }

  async getValue(element) {
    return await this.page.innerText(element);
  }

  async fillElement(element) {
    return await this.page.locator(element);
  }

  async clickElement(element) {
    await (await this.getElement(element)).click();
  }

  async getValueElement(element) {
    await this.getValue(element);
  }
}

module.exports = { Page };

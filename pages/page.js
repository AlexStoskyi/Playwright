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
  async openUrl() {
    await this.page.goto('/');
    await this.page.waitForLoadState('load');
  }

  async getElement(element) {
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

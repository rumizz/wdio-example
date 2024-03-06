import Page from './page.js';

class DetailsPage extends Page {
  public open() {
    return super.open('Orders/7991/');
  }
}

export default new DetailsPage();

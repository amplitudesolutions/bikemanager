import { BikemanagerPage } from './app.po';

describe('bikemanager App', function() {
  let page: BikemanagerPage;

  beforeEach(() => {
    page = new BikemanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

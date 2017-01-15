import { Mean2appPage } from './app.po';

describe('mean2app App', function() {
  let page: Mean2appPage;

  beforeEach(() => {
    page = new Mean2appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

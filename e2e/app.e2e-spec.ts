import { SecondProjectPage } from './app.po';

describe('second-project App', function() {
  let page: SecondProjectPage;

  beforeEach(() => {
    page = new SecondProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { SearchappPage } from './app.po';

describe('searchapp App', function() {
  let page: SearchappPage;

  beforeEach(() => {
    page = new SearchappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

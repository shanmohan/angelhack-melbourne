import { AngelhackMelbournePage } from './app.po';

describe('angelhack-melbourne App', () => {
  let page: AngelhackMelbournePage;

  beforeEach(() => {
    page = new AngelhackMelbournePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

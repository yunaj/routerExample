import { RouterExamplePage } from './app.po';

describe('router-example App', () => {
  let page: RouterExamplePage;

  beforeEach(() => {
    page = new RouterExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

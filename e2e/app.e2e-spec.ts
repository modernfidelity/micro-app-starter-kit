import { MicroAppStarterKitPage } from './app.po';

describe('micro-app-starter-kit App', () => {
  let page: MicroAppStarterKitPage;

  beforeEach(() => {
    page = new MicroAppStarterKitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

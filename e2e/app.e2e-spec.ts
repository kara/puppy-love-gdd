import { PuppyLoveGddPage } from './app.po';

describe('puppy-love-gdd App', function() {
  let page: PuppyLoveGddPage;

  beforeEach(() => {
    page = new PuppyLoveGddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

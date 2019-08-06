import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display balls, squares and buttons', () => {
    page.navigateTo();

    const ballElements = element.all(by.css('app-ball'));
    const squareElements = element.all(by.css('app-square'));
    const actionElements = element.all(by.css('button'));

    const filledElements = element.all(by.css('.filled'));
    const SelectedElements = element.all(by.css('.selected'));

    expect(ballElements.count()).toBe(8);
    expect(squareElements.count()).toBe(55);
    expect(actionElements.count()).toBe(1);

    expect(ballElements.last().getText()).toEqual('PB');

    expect(filledElements.count()).toBe(0);
    expect(SelectedElements.count()).toBe(0);
  });

  it('should display correct content when click', () => {
    page.navigateTo();

    element(by.css('button')).click();

    const filledElements = element.all(by.css('.filled'));
    const SelectedElements = element.all(by.css('.selected'));

    const filledResults = page.getResults(filledElements);
    const selectedResults = page.getResults(filledElements);

    expect(filledElements.count()).toBe(8);
    expect(SelectedElements.count()).toBe(8);

    expect(filledResults.sort()).toEqual(selectedResults.sort());

    expect(filledElements.last().getText()).toEqual(SelectedElements.last().getText());
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});

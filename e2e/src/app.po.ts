import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getResults(elements: ElementArrayFinder) {
    const results = [];
    elements.each((elementFinder) => {
      elementFinder.getText().then(value => {
        results.push(value);
      });
    });

    return results;
  }
}

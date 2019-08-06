const jobPage = require('../pages/job.page')

describe('Visual regression tests on job list page', () => {
  before(() => {
    jobPage.open();
  });

  it('Displays job picture', function () {
    expect(browser.checkElement(jobPage.getLogo, this.test.title)).to.equal(0);
  });
});
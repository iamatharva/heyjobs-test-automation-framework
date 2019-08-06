const errorPage = require('../pages/error.page')
const errorData = require('../data/error.data')

describe('Error Page', () => {
  before(() => {
    errorPage.open();
  });

  it('Displays error message and code when visited unkonown page.', () => {
    expect(errorData.unknownPageError.errorCode).to.equal(errorPage.getErrorCodeText());
    expect(errorData.unknownPageError.errorMessage).to.equal(errorPage.getErrorMessage());
  });
});
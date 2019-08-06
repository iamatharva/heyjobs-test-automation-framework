class ErrorPage {
  open() {
    browser.url('/foo');
  }

  get errorCodeText() {
    return $(".sc-EHOje.eymTpQ")
  }

  get errorMessage() {
    return $(".sc-ifAKCX.gfjHfL > p")
  }

  getErrorMessage() {
    return this.errorMessage.getText();
  }

  getErrorCodeText() {
    return this.errorCodeText.getText();
  }
}
module.exports = new ErrorPage();
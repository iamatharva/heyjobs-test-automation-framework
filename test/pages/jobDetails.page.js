class JobDetailsPage {
  open() {
    browser.url('/');
  }

  get jobTitle() {
    return $(".sc-EHOje.eymTpQ")
  }

  get jobLocation() {
    return $(".sc-bZQynM.ehUWCv")
  }

  get companyName() {
    return $(".sc-gZMcBi.crfCZD")
  }

  get backButton() {
    return $(".sc-bwzfXH.jOGcac > main > a")
  }

  getJobTitle() {
    this.jobTitle.waitForDisplayed();
    if (this.jobTitle.isDisplayed()) return this.jobTitle.getText();
  }

  getJobLocation() {
    this.jobLocation.waitForDisplayed();
    if (this.jobLocation.isDisplayed()) return this.jobLocation.getText();
  }

  getCompanyName() {
    this.companyName.waitForDisplayed();
    if (this.companyName.isDisplayed()) return this.companyName.getText();
  }

  goBackToJobListPage() {
    this.backButton.click();
  }
}
module.exports = new JobDetailsPage();
const jobPage = require('../pages/job.page')
const jobList = require('../data/jobList.data')

describe('Open Job list Page', () => {
  before(() => {
    jobPage.open();
  });

  it('Displays company names.', () => {
    expect(jobList.companyName).to.deep.equal(jobPage.getCompanyNamesList());
  });

  it('Displays company location.', () => {
    expect(jobList.companyLocation).to.deep.equal(jobPage.getLocationList());
  });

  it('Displays job Picture.', () => {
    expect(jobPage.checkjobImageLoad()).to.be.true
  });
});
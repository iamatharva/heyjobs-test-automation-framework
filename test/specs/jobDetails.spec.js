const jobPage = require('../pages/job.page')
const jobDetailsPage = require('../pages/jobDetails.page')

const jobDetailsData = require('../data/jobDetails.data')
const jobList = require('../data/jobList.data')

describe('Open Job Details Page of a Job', () => {
	before(() => {
		jobPage.open();
	});

	it('Displays Job title, location and comapny name', () => {
		jobPage.goToJobDetailsPage()
		expect(jobDetailsPage.getJobTitle()).to.equal(jobDetailsData.jobDetails.name);
		expect(jobDetailsPage.getJobLocation()).to.equal(jobDetailsData.jobDetails.location);
		expect(jobDetailsPage.getCompanyName()).to.equal(jobDetailsData.jobDetails.company);
	});

	it('Navigate back from the job details page to job list', () => {
		jobDetailsPage.goBackToJobListPage()
		expect(jobList.companyName).to.deep.equal(jobPage.getCompanyNamesList());
		expect(jobList.companyLocation).to.deep.equal(jobPage.getLocationList());
	});
});
class JobPage {
	open() {
		browser.url('/');
	}

	get companyNames() {
		return $$("strong.sc-gZMcBi.gABsdI")
	}

	get JobDetailsPage() {
		return $(".sc-bwzfXH.jOGcac > main > section:nth-child(2) > div > a:nth-child(1) > div > span")
	}

	get joblistLength() {
		return $$('.sc-bxivhb.hLwyNE > section:nth-child(2) > div > a')
	}

	get jobLogo() {
		let list = []
		let size = this.joblistLength.length
		for (let i = 1; i <= size; i++) {
			var imageList = $(`.sc-bwzfXH.jOGcac > main > section:nth-child(2) > div > a:nth-child(${i}) > div > span > div > div > img`)
			list.push(imageList)
		}
		return list
	}

	get getLogo() {
			return $(`.sc-bwzfXH.jOGcac > main > section:nth-child(2) > div > a:nth-child(1) > div > span > div > div > img`)
	}

	get locationNames() {
		let list = []
		let size = this.joblistLength.length
		for (let i = 1; i <= size; i++) {
			var locationList = $(`main.sc-bxivhb.hLwyNE > section:nth-child(2) > div > a:nth-child(${i}) > div > span > div > div > span`)
			list.push(locationList)
		}
		return list
	}

	getCompanyNamesList() {
		let companyNamesList = []
		let names = this.companyNames
		names.forEach(name => {
			companyNamesList.push(name.getText())
		});
		return companyNamesList
	}

	getLocationList() {
		let companyNamesList = []
		let names = this.locationNames
		names.forEach(name => {
			var city = name.getText().split(/(?=[A-Z])/)[1]
			companyNamesList.push(city)
		});
		return companyNamesList
	}

	goToJobDetailsPage() {
		this.JobDetailsPage.click();
	}

	checkjobImageLoad() {
		let images = this.jobLogo
		images.forEach(image => {
			image.waitForDisplayed()
			if (image.isDisplayed())
				return true
		})
		return true
	}
}
module.exports = new JobPage();
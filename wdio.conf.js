const {
	join
} = require('path');

exports.config = {

	runner: 'local',
	path: '/',
	specs: [
		'./test/specs/*.js'
	],
	exclude: [

	],
	maxInstances: 1,
	capabilities: [{
		maxInstances: 1,
		browserName: 'chrome',
	}],
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'error',
	bail: 0,
	baseUrl: 'http://localhost:3333',
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000
	},
	services: [
		['image-comparison',
			{
				baselineFolder: join(process.cwd(), './screenshots/reference/'),
				formatImageName: '{tag}-{logName}-{width}x{height}',
				screenshotPath: join(process.cwd(), './screenshots/'),
				savePerInstance: true,
				autoSaveBaseline: true,
				blockOutStatusBar: true,
				blockOutToolBar: true,
			}
		],
		['chromedriver']
	],
	before: function () {
		let chai = require('chai');
		global.chai = chai;
		chai.use(require('chai-string'));
		global.expect = chai.expect;
	},
}
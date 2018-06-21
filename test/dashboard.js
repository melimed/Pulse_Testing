var dashboardPage=require ('../page/DashboardPOM.js');
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';

describe('Test Dashboard Btns', function() {
	it('Employee Btn', function() {
		var pulseDashboard= new dashboardPage();
		pulseDashboard.getPage();
		logger.info("Pulse application opened");
		pulseDashboard.employeeclick();
		logger.info("Employee menu button clicked");
		var btn = pulseDashboard.employeeText();
		expect(btn).toEqual('Employees');
		logger.info("Employee page opened");
		expect(browser.getTitle()).toEqual('Pulse Management');
	});
	 
	it('Dashboard Btn', function() {
		 var pulseDashboard= new dashboardPage();
		 pulseDashboard.dashboardclick();
		 logger.info("Dashboard menu button clicked");
		 expect(browser.getTitle()).toEqual('Pulse Management');
		 logger.info("Returned to dashboard page");
	});
});
describe('Test Logo', function() {
	it('Go back to dashboard with logo', function() {
		 var pulseDashboard= new dashboardPage();
		 pulseDashboard.getPage();
		 pulseDashboard.employeeclick();
		 logger.info("Employee page opened");
		 pulseDashboard.logoclick();
		 expect(browser.getTitle()).toEqual('Pulse Management');
		 logger.info("Redirected to Dashboard page by app logo");
	});
});
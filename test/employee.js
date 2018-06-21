var employeePage=require ('../page/EmployeePOM.js');
var editEmployee=require ('../page/EmployeeEditPOM.js');
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';

describe('Test Employee Editing', function() {
	it('Edit Btn', function() {
		var employee= new employeePage();
		employee.getPage();
		logger.info("Employee page opened");
		var btn = employee.employeeText();
		expect(btn).toEqual('Employees');
		employee.clickEdit();
		logger.info("Employee edit page opened");
		var edit= new editEmployee();
		edit.enterfirstName('Test');
		logger.info("Name entered");
		var marker = $('.btn.btn-primary');
		browser.executeScript("arguments[0].click();", marker.getWebElement());
		//edit.clickSaveButton();
		logger.info("Changes saved");
		browser.driver.sleep(2000);
		var employeeName = employee.employeeName();
		expect(employeeName).toEqual('PedroTest');
		logger.info("Name changes verified"); 
	});
});
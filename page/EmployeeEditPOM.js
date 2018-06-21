var pulseEmployee = function() {
     //Note that for Angular apps, the binding and model locators are not supported. 
	//We recommend using by.css. (need to refactor POM)
    this.firstNameTextbox = element(by.id('firstname'));
	this.lastnameTextbox = element(by.model('employee.lastname'));
	this.levelTextbox = element(by.model('employee.level'));
	this.startdateTextbox = element(by.model('employee.startdate'));
	this.groupTextbox = element(by.model('employee.group'));
	this.managerTextbox = element(by.model('employee.manager'));
	this.officeTextbox = element(by.model('employee.office'));
	this.saveButton = element(by.css('.btn.btn-primary'));
	this.cancelButton = element(by.buttonText('Cancel'));
	
	
    this.enterfirstName = function(firstname) {
        this.firstNameTextbox.sendKeys(firstname);
    };
	
    this.enterlastName = function(lastname) {
        this.lastnameTextbox.sendKeys(lastname);
    };

    this.enterLevel = function(level) {
        this.levelTextbox.sendKeys(level);
    };

    this.enterStartDate = function(startdate) {
        this.startdateTextbox.sendKeys(startdate);
    };

    this.enterGroup = function(group) {
        this.groupTextbox.sendKeys(group);
    };

    this.enterManager = function(manager) {
        this.managerTextbox.sendKeys(manager);
    };

    this.enterOffice = function(office) {
        this.officeTextbox.sendKeys(office);
    };
	this.clickSaveButton = function() {
	    this.saveButton.click();
	};

	/*this.clickSaveButton = function() {
        this.saveButton.click();
		return require('./employee_list_page.js'); 
    };

	this.clickCancelButton = function() {
        this.cancelButton.click();
		return require('./employee_list_page.js'); 
    };*/
   
	
};
module.exports =pulseEmployee
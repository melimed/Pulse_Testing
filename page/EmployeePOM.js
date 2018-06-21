var employee_list_page = function() {
	
    this.Edit=element(by.xpath('//datatable-selection/datatable-scroller/datatable-row-wrapper[1]/datatable-body-row/div[1]/datatable-body-cell[7]/div/button'));
    this.pagetext = element(by.cssContainingText('h1', 'Employees'));
    this.EmployeeOne=element(by.xpath('//datatable-selection/datatable-scroller/datatable-row-wrapper[1]/datatable-body-row/div[1]/datatable-body-cell[1]/div'));
	
	this.getPage = function(){
		browser.get('http://10.0.40.153/employee/list?isUp=true');
	};
	this.employeeText = function(){
		return this.pagetext.getText();
	}
	this.employeeName = function(){
		return this.EmployeeOne.getText();
	}
    this.clickEdit = function(name) {
        this.Edit.click();
    };
};
module.exports =employee_list_page
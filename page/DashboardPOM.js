var pulseDashboard=function (){
	this.logo = element(by.css('a[class="navbar-brand ns-logo"]'));
	this.dashboardBtn=element(by.css('[href="/dashboard"]'));
	this.employeeBtn=element(by.css('[href="/employee?isUp=true"]'));
	this.logoutBtn=element(by.cssContainingText('.nav-link', 'Logout'));
	this.pagetext = element(by.cssContainingText('h1', 'Employees'));
	
	this.getPage = function(){
		browser.get('http://10.0.40.153/dashboard');
	};
	this.logoclick = function(){
		this.logo.click();
	};
	this.dashboardclick = function(){
		this.dashboardBtn.click();	
	};
	this.employeeclick = function(){
		this.employeeBtn.click();
	};
	this.logoutclick = function(){
		this.logoutBtn.click();
	};
	this.employeeText = function(){
		return this.pagetext.getText();
	};
};
module.exports =pulseDashboard

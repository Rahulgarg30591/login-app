Ext.define('LoginApp.view.main.login.LoginViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginviewcontroller',
	models : ['viewmodel.loginviewmodel'],
	onPasswordChange: function (barTextField) {},
	submitInfo: function () {
		const modelData = this.getViewModel();
		const userId = modelData.data.userId;
		const password = modelData.data.password;

		Ext.Ajax.request({
        url : 'https://swapi.co/api/people/?search=' + userId,
        method : 'GET',
        headers :
        {
            'Content-Type' : 'application/json'
        },
				success : function(response) {
					const data = JSON.parse(response.responseText);
					debugger;
					if (data.count > 0) {
							if (data.results[0].birth_year === password) {
									alert('Welcome ' + userId);
							} else {
									alert('Invalid Password.');
							}
					} else {
							alert('Invalid User Credentials.');
					}
				}
		});
	}
});

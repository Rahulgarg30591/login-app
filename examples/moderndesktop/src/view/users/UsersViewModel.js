Ext.define('LoginApp.view.users.UsersViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.usersviewmodel',
	data: {
		name: 'LoginApp'
	},
	stores: {
		users: {
			type: 'users'
		}
	}
});

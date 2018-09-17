Ext.define('LoginApp.view.main.login.LoginViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.loginviewmodel',

	data: {
		userId: '',
		password: '',
	},

	formulas: {
      name: function (get) {
          var fn = get('userId'), ln = get('password');
          return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
      }
  }
});

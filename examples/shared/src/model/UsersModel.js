Ext.define('LoginApp.model.UsersModel', {
	extend: 'LoginApp.model.Base',
	fields: [
		'username', 
		'_id', 
		{
			name: 'creator',
			mapping: '_meta.creator'
		},
		{
			name: 'created',
			mapping: '_meta.created'
		},
		'description'
	]
});

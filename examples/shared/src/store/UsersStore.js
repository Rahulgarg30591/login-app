Ext.define('LoginApp.store.UsersStore', {
	extend: 'Ext.data.Store',
	alias: 'store.users',
	requires: [
		'Ext.data.proxy.Rest',
	],
	model: 'LoginApp.model.UsersModel',
	autoLoad: true,

//	proxy: {
//		type: 'rest',
//		url: 'http://10.211.55.3:8080/users'
//	},

	data: [
		{ username: 'Jean Luc', _id: 123, _meta: { creator: 456, created: "02/14/1962" }, description: 'desc' },
		{ username: 'Worf', _id: 123, _meta: { creator: 456, created: "02/14/1962" }, description: 'desc' },
		{ username: 'Deanna', _id: 123, _meta: { creator: 456, created: "02/14/1962" }, description: 'desc' },
		{ username: 'Data', _id: 123, _meta: { creator: 456, created: "02/14/1962" }, description: 'desc' },
	],
	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}

});

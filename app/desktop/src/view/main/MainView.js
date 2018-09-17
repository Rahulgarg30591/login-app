Ext.define('LoginApp.view.main.MainView', {
	extend: 'Ext.Container',
	xtype: 'mainview',
	controller: 'mainviewcontroller',
	viewModel: {
		type: 'mainviewmodel'
	},
	layout: {
		type:'vbox',
    align:'center',
  },
	items: [
		{ xtype: 'headerview', reference: 'headerview', docked: 'top',    bind: {height: '{headerview_height}'} },
		{ xtype: 'footerview', reference: 'footerview', docked: 'bottom', bind: {height: '{footerview_height}'} },
		{ xtype: 'loginview', reference: 'loginview'},
	]
});

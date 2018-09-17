Ext.define('LoginApp.view.main.header.HeaderView', {
	extend: 'Ext.Toolbar',
	xtype: 'headerview',
	cls: 'headerview',
	items: [
		{
			xtype: 'container',
			cls: 'headerviewtext',
			bind: { html: 'Login Application' }
		},
	]
});

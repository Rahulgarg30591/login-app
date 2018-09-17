Ext.define('LoginApp.view.main.login',{
	xtype: 'loginview',
	cls: 'login_form',
	controller: {type: 'loginviewcontroller'},
	viewModel: {type: 'loginviewmodel'},
	requires: [],
	extend: 'Ext.panel.Panel',
  scrollable: true,
	width: 600,
	shadow: true,
  bodyPadding: 10,
	layout : {
			type :'vbox',
			align: 'center',
			pack  : 'center',
	},
	bind: {
        title: 'Hello {userId}'
  },
	items: [{
	    xtype: 'textfield',
	    fieldLabel: 'User ID',
			bind: '{userId}',
			placeholder: 'User ID',
			inputType: 'text',
			cls: 'text_fields',
			vtype: 'email',
			listeners: {
					change: 'onPasswordChange'
			}
	}, {
	    xtype: 'textfield',
	    name: 'password',
			bind: '{password}',
	    fieldLabel: 'password',
			placeholder: 'Password',
			inputType: 'password',
			cls: 'text_fields',
	    allowBlank: false,
			listeners: {
          change: 'onPasswordChange'
      }
	}, {
	    xtype: 'button',
			handler: 'submitInfo',
			ui: 'action',
			text: 'Submit',
			cls: 'submit_btn',
	}]
});

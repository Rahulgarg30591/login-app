Ext.define('LoginApp.view.home2.HomeViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.home2viewcontroller',

	onHomeViewBeforeHide: function() {
		var v = this.lookup('theVideo')
		if (v != undefined) {
			v.stop()
		}
	}

});

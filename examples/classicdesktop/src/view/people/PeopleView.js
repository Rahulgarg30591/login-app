Ext.define('LoginApp.view.people.PeopleView',{
	extend: 'Ext.panel.Panel',
	xtype: 'peopleview',
	cls: 'peopleview',
	controller: 'peopleviewcontroller',
	viewModel: {
		type: 'peopleviewmodel'
	},
	title: 'Job and Education Data',
	layout: 'fit',
	items: [
		{
			xtype: 'grid',
			multiColumnSort: true,
			store: Ext.create('LoginApp.store.PeopleStore',{}),
			columns: [
				{ text: 'ID', dataIndex: 'id',  align: 'right', width: 80 },
				{ text: 'State', dataIndex: 'state', width: 120 },
				{ text: 'Occupation', dataIndex: 'occupation', flex: 1 },
				{ text: 'Income', dataIndex: 'total_person_income', align: 'right', formatter: 'usMoney', width: 100 },
				{ text: 'Earnings', dataIndex: 'total_person_earnings',  align: 'right', formatter: 'usMoney', width: 100 },
				{ text: 'Hours', dataIndex: 'worked_hours_per_week',  align: 'right', width: 70 },
				{ text: 'Education', dataIndex: 'educational_attainment', width: 300 },
				{ text: 'Sex', dataIndex: 'sex', width: 100 },
			]
		}
	]
});

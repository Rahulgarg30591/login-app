Ext.define('LoginApp.view.home2.HomeView',{
	extend: 'Ext.panel.Panel',
	xtype: 'home2view',
	controller: 'home2viewcontroller',
	viewModel: {
		type: 'home2viewmodel'
	},	
	cls: 'home',
	scrollable: 'y',
	listeners: {
		beforehide: 'onHomeViewBeforeHide'
	},
	items: [
		{
			xtype: 'component',
			cls: 'header-message',
			tpl: [
					'<div xclass="text">',
							'<div class="greeting"></div>',
							'<div class="person-name"></div>',
					'</div>'
			],
			bind: {
					data: {
							firstname: '',
							greeting: ''
					}
			}
		}, 
		{
			xtype: 'component',
			html: `<div class="message2">Hospital Authority Video</div>
			`
		}, 
		{
			xtype: 'video',
			reference: 'theVideo',
			height: 250,
			style: {backgroundColor: "white"},
			url: ['resources/modernphone/video/HA_GOPC_eng1.mp4'],
			posterUrl: 'resources/modernphone/images/p.png',
			loop: true,
		},
		{
			xtype: 'component',
			html: `<p><div class="message2">Hospital Authority News</div>
			`
		}, 
		{
			xtype: 'carousel',
			height: 200,
			margin: '0 5 0 5',
			items: [
				{
					html: `
					醫院管理局發布最新一期《風險通報》
					<br/>
					為鼓勵前線醫護人員接種流感疫苗，醫院管理局(醫管局)護理總行政經理潘恩榮今日（11月13日）聯同香港護士協會主席、立法會議員李國麟教授，到明愛醫院病房探訪前線護士，呼籲他們及早注射季節性流感疫苗，為迎戰冬季流感高峰期做好準備。兩人並以身作則，即場接種疫苗。
					`
				}, 
				{
					html: `
					瑪嘉烈醫院抗藥性金黃葡萄球菌個案組群
					<br/>
					瑪嘉烈醫院發言人今日（十月三十日）有以下公布：
					本院新生嬰兒深切治療部一名二十八日大男嬰，於十月二十三日經檢測後確診帶有抗藥性金黃葡萄球菌。院方按既定感染控制程序篩查同期有接觸的病人，證實該病房再有五名嬰兒（一男四女，年齡為三日至一個月）帶有抗藥性金黃葡萄球菌，惟沒有出現感染病徵。現時六名嬰兒因自身疾病仍然留院，情況穩定，正接受進一步觀察及隔離。
					院方已根據既定指引加強預防感染措施，並繼續緊密監察該病房病人的健康情況。
					`
				},
				{
					html: `
					新界西醫院聯網公布傳染病個案組群
					<br/>
					新界西醫院聯網發言人今日（十一月二日）有以下公布：
					青山醫院成人精神科一個女病房自十月三十一日起先後有六名病人（年
					齡由25 歲至58 歲）出現呼吸道感染徵狀。院方已為病人進行所需測試，
					其中四名病人對甲型流感(H3)病毒呈陽性反應。有關病人現正接受隔離治
					療，情況穩定。
					`
				},
			]
		}
	]
});


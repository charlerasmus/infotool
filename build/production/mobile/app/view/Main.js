Ext.define('Mobile.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Home',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: true,
                html: [
                    "Information Management Tool"
                ].join("")
            },
            {
                title: 'Areas',
                iconCls: 'info',
                items: [
                    {
						xtype: 'navigationview',
						items: [{
							xtype: 'button',
							text: 'Push a new view!',
							handler: function() {
								view.push({
									title: 'Second',
									html: 'Second view!'
								});
							}
						}]						
					}
                ]
            },
            {
                title: 'Config',
                iconCls: 'settings',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    }
                ]
            }
        ]
    }
});

Ext.define('Mobile.view.Main', {
  extend: 'Ext.navigation.View',
  xtype: 'mainpanel',
  fullscreen: true,
  requires: [
    'Mobile.view.List',
    'Mobile.view.Urls'
  ],
  config: {
    items: [{
	  xtype: 'listcontainer'
	}]
  }
});

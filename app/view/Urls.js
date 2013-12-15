Ext.define('Mobile.view.Urls', {
  extend: 'Ext.TabPanel',
  id: 'urls',
  xtype: 'urls',
  alias: 'widget.urls',
  fullscreen: true,
  config: {
    tabBarPosition: 'bottom',
    items: [{
      title: 'Main',
      //iconCls: 'home',
      html: ['No url found!'
      ]
    }/*,
    {
      title: 'Extra',
      iconCls: 'home',
      html: ['Extra!'
      ]
	}*/]
  },
  listeners: {
    activate: function() {
console.log ('A');		
console.log (this.up().up());		
    }
  }  
});

Ext.override(Ext.data.Connection, {
  setupUrl: function(options, url){
		
    var form = this.getForm(options);
    var urlLocation = location.href;
    
    if (form) {
      url = url || form.action;
    };

    if (urlLocation.search('/dev/') > 0) {

      baseUrl = urlLocation.substr(0, urlLocation.search('/mobile/dev/'));
      url = baseUrl + '/' + 'codeigniter/dev/index.php/' + url;
      
	}
	else {

      baseUrl = urlLocation.substr(0, urlLocation.search('/mobile/'));
      url = baseUrl + '/' + 'codeigniter/index.php/' + url;
      
	};

    return url;
        
  }
});

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

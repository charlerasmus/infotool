function changeUrl (system, area) {
	
  if (system == 'crm') {		 		  		  
    var storeUrl = 'crm/' + area;  
  }
  else if (system == 'project') {
	
    if (area == 'pc_projects') {
	  area = '';
	}			 
	else if (area == 'pc_tasks') {
	  area = 'tasks';
	}
	else if (area == 'pc_subtasks') {
	  area = 'subtasks';
	};
		  
	var storeUrl = 'projects/' + area;
	
  }
  else {
		  
	if ((area == 'countries') ||
	    (area == 'regions')) {
	  var storeUrl = 'locations/' + area;
    }
    else if ((area == 'chapters') ||
	         (area == 'verses')) {
	  var storeUrl = 'books/' + area;
    }
    else if (area == 'categories') {
	  var storeUrl = 'codes/' + area;
    }	    
	else {		  
      var storeUrl = area;
    };
        
  };	

  storeUrl = storeUrl + '?limitquery=50&order=create_date desc, url';
  var currentStore = Ext.getStore('Urls');

  currentStore.setProxy({
    url: storeUrl
  });
  
  currentStore.load();

};

Ext.define('Ext.data.Cors', {
  extend : 'Ext.data.Connection',
  alternateClassName : ['Ext.Cors'],
  singleton : true,
  config: { autoAbort: false, useDefaultXhrHeader: false }
});

Ext.define('Mobile.view.List', {
    extend: 'Ext.Container',
    xtype: 'listcontainer',
    id : 'mainlist',
    alias: 'widget.mainlist',
    fullscreen: true,
    //layout: 'hbox',
    initialize: function () {

      var refreshButton = {
        xtype: 'button',
        text: 'Refresh',
        ui: 'action',
        handler: this.onRefreshButtonTap,
        scope: this
      };
      
      var verifyAllButton = {
        xtype: 'button',
        text: 'Verify All',
        ui: 'action',
        handler: this.onVerifyAllButtonTap,
        scope: this
      };
      
      var nextButton = {
        xtype: 'button',
        text: 'Next',
        ui: 'action',
        handler: this.onNextButtonTap,
        scope: this
      };            

      var systeamAreaSelect = {
        xtype: 'selectfield',
        label: 'System Area',
        displayField: 'display_name',
        valueField: 'pk',
        value: 'default urls',
        store: Ext.getStore('SystemAreaTables'),
        ui: 'action',
        scope: this,
        listeners: {
		  change: function () {			  
		    changeUrl (this.record.raw.system_desc, this.record.raw.name);
		  }  
	    }
      };

      var topToolbar = {
        xtype: 'toolbar',
        //title: 'List',
        docked: 'bottom',
        items: [
          verifyAllButton,
          refreshButton,
          nextButton,
          systeamAreaSelect                
        ]
      };

      var listItems = {
        xtype: 'listitems',
        store: Ext.getStore('Urls')
      };

      this.add([topToolbar, listItems]);
      this.callParent();    

      changeUrl ('default', 'urls');
            
    },
    onRefreshButtonTap: function () {

      var currentStore = Ext.getStore('Urls');
      currentStore.load();      

    },
    onVerifyAllButtonTap: function () {

      this.fireEvent('onVerifyAllButtonTap', this);

    },
    onNextButtonTap: function () {
		
      if (this.items.items[1].selected.length = 0) {
	    this.items.items[1].select(1);
	  }
	  else {

      };

      this.fireEvent('onNextButtonTap', this);

    },        
    config: {
      layout: {
        type: 'fit'
      }
    }
});

Ext.define('Mobile.view.List', {
    extend: 'Ext.Container',
    alias: 'widget.listcontainer',
    initialize: function () {

      this.callParent(arguments);

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

      var topToolbar = {
        xtype: 'toolbar',
        title: 'List',
        docked: 'bottom',
        items: [
          verifyAllButton,
          refreshButton,
          nextButton                    
        ]
      };

      var listItems = {
        xtype: 'listitems',
        store: Ext.getStore('Urls'),
        listeners: {
          disclose: { fn: this.onListItemsDisclose, scope: this }
        }
      };

      this.add([topToolbar, listItems]);  
            
    },
    onRefreshButtonTap: function () {

      var currentStore = Ext.getStore('Urls');
      currentStore.load();
      
      //this.fireEvent('onRefreshButtonTap', this);

    },
    onVerifyAllButtonTap: function () {

      console.log('onVerifyAllButtonTap');
      this.fireEvent('onVerifyAllButtonTap', this);

    },
    onNextButtonTap: function () {
alert(this.items.items[1]._lastSelected.data.pk);
      if (this.items.items[1].selected.length = 0) {
console.log (this.items.items[1]);
	    //this.items.items[1].setActiveItem(1);	  
	  }
	  else {
console.log (this.items.items[1]);		  
	    //this.items.items[1].setActiveItem(this.items.items[1].selected + 1);
      };

      this.fireEvent('onNextButtonTap', this);
//console.log (this.items.items[1].selected);
    },        
    config: {
      layout: {
        type: 'fit'
      }
    }
});

function loadURL(url) {
    var oRequest = new XMLHttpRequest();
    oRequest.open('GET', url, false);
    //oRequest.setRequestHeader("User-Agent", navigator.userAgent);
    oRequest.send(null)
    
    return oRequest.responseText;
};

Ext.define('Mobile.view.ListItems', {
  extend: 'Ext.dataview.List',
  alias: 'widget.listitems',
  id: 'listitems',
  fullscreen: true,  
  config: {
    scrollable:'vertical',
    loadingText: 'Loading List Items...',
    emptyText: '<pre> ' +
               ' <div class="notes-list-empty-text">No lists found.</div>' +
               ' <pre/>',
    onItemDisclosure: function (record, list, target) {

      var currentDate = new Date();
      var currenDay = currentDate.getDate();
      var currenMonth = currentDate.getMonth() + 1;
      var currenYear = currentDate.getFullYear();
      var verifiedDate = currenYear + "-" + currenMonth + "-" + currenDay;

      Ext.Cors.request({
        url: 'urls',
        params: {
          pk: record.data.pk,
          url: record.data.url,
          verified_date: verifiedDate,
          verified_user: 'CHARL'
        },
        method: 'PUT',
        success: function(response){

          list.innerHtmlElement.dom.style.backgroundColor = 'lightblue';
          
        }

      });

      var urlPanel = {
        xtype: 'urls'
      };
//console.log (this);
      this.up().up().push(urlPanel);
      this.up().up().items.items[2].items.items[0].setHtml('<iframe src=' + record.data.url + 
                                                           ' width=100% height=800></iframe>');
      /*this.up().up().items.items[2].items.items[0].setHtml(loadURL(record.data.url));*/
//console.log ('1');
//console.log(this.up().up().innerItems[1].innerItems[0]);
      this.fireEvent('ondisclosuretap', this, record);
    
    },
    itemTpl:'<div class="list-item-title">\n\
               <div class="list-item-title-row">\n\
                 <div class="bl-urls"><span class="list-urls">{display_name}</span></div>\n\
               </div>\n\
             </div>'
  },
  onItemTap: function(list, index, target, record){

    var listValue = list.target.innerText;

	if ((list.target.style.backgroundColor != 'lightblue') &&
	    (listValue.length > 0)) {	  

      var divider = listValue.search(' - ');
      var currentUrl = listValue.substr(0, divider);
      var urlPk = listValue.substr((divider + 3));	  

      var currentDate = new Date();
      var currenDay = currentDate.getDate();
      var currenMonth = currentDate.getMonth() + 1;
      var currenYear = currentDate.getFullYear();
      var verifiedDate = currenYear + "-" + currenMonth + "-" + currenDay;

      Ext.Cors.request({
        url: 'urls',
        params: {
          pk: urlPk,
          url: currentUrl,
          verified_date: verifiedDate,
          verified_user: 'CHARL'
        },
        method: 'PUT',
        success: function(response){

          list.target.style.backgroundColor = 'lightblue';
          
        }

      });

    };

  }
});

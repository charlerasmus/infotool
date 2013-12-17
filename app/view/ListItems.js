function loadURL(url) {
    var oRequest = new XMLHttpRequest();
    oRequest.open('GET', url, false);
    //oRequest.setRequestHeader("User-Agent", navigator.userAgent);
    oRequest.send(null)
    
    return oRequest.responseText;
};

function getSystemArea () {
	
  var currentStore = Ext.getStore('Urls');
  var fullUrl = currentStore.getProxy().getUrl();
  var systemArea = fullUrl.substr(0, fullUrl.indexOf('?'));	
	
  return systemArea;
	
};	

function verifyUrl (urlPk, list) {
	
  var currentDate = new Date();
  var currenDay = currentDate.getDate();
  var currenMonth = currentDate.getMonth() + 1;
  var currenYear = currentDate.getFullYear();
  var verifiedDate = currenYear + "-" + currenMonth + "-" + currenDay;

  Ext.Cors.request({
    url: 'urls',
    params: {
      pk: urlPk,
      verified_date: verifiedDate,
      verified_user: 'CHARL'
    },
    method: 'PUT',
    success: function(response){

      list.style.backgroundColor = 'lightblue';
          
    }

  });	
	
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
//console.log (record);
//console.log (list);
      verifyUrl(record.data.pk, list.innerHtmlElement.dom);
      
      var urlPanel = {
        xtype: 'urls'
      };
//console.log (this);
      this.up().up().push(urlPanel);
      this.up().up().items.items[2].items.items[0].setHtml('<iframe src=' + record.data.url + 
                                                           ' width=100% height=800></iframe>');
      //this.up().up().items.items[2].items.items[0].setHtml(loadURL(record.data.url));
//console.log ('1');
//console.log(this.up().up().innerItems[1].innerItems[0]);
      this.fireEvent('ondisclosuretap', this, record);
    
    },
    itemTpl:'<div class="list-item-title">\n\
               <div class="list-item-title-row">\n\
                 <div class="bl-urls">\n\
                   <span class="list-urls">{display_name}</span>\n\
                   <input type="hidden" class="list-urls_pk" value="{pk}">\n\
                 </div>\n\
               </div>\n\
             </div>'
  },
  onItemTap: function(list, index, target, record){

    if (getSystemArea() == 'urls') {

      var currentUrl = list.target.innerText;
      var UrlPk = list.touch.target.nextElementSibling.defaultValue;

	  if ((list.target.style.backgroundColor != 'lightblue') &&
	      (currentUrl.length > 0)) {	  
//console.log(list.touch.target.nextElementSibling.defaultValue);
//console.log (list);
//console.log (index);
//console.log (record);
        verifyUrl(UrlPk, list.touch.target);

      };

    };
    
  }
    
});

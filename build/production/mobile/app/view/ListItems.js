Ext.define('Mobile.view.ListItems', {
  extend: 'Ext.dataview.List',
  alias: 'widget.listitems',
  config: {
	scrollable:'vertical',
    loadingText: 'Loading List Items...',
    emptyText: '</pre> ' +
               ' <div class="notes-list-empty-text">No lists found.</div>' +
               ' <pre/>',
    onItemDisclosure: true,
    itemTpl:'<div class="list-item-title">\n\
               <div class="list-item-title-row">\n\
                 <div class="bl-urls"><span class="list-urls">{url}</span></div>\n\
               </div>\n\
             </div>'
  },
  listeners: {
    onDiscloseTap: function (list, record, target, index, evt, options) {
console.log (record);
    }
  }
});

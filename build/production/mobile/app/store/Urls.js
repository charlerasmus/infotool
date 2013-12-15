Ext.define('Mobile.store.Urls', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Mobile.model.Url',
        autoLoad: true,
        sorters: 'url',
        /*grouper: {
            groupFn: function(record) {
                return record.get('url')[0];
            }
        },*/
        proxy: {
            type: 'ajax',
            //url: 'urls.json'
            url : 'http://capetosofia.com/servers/codeigniter/dev/1.0.2/index.php/newone' +
                  '?limitquery=50&order=create_date desc, url'
        }
    }
});

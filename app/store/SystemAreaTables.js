Ext.define('Mobile.store.SystemAreaTables', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Mobile.model.SystemAreaTable',
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
            url : 'http://capetosofia.com/servers/codeigniter/dev/1.0.2/index.php/systemareatables' +
                  '?limitquery=100&order=display_name'
        }
    }
});

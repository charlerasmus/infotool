Ext.define('Mobile.view.Urls', {
    extend: 'Ext.List',
    xtype: 'urls',
    config: {
        title: 'Urls',
        cls: 'x-contacts',
        variableHeights: true,
        store: 'Urls',
        itemTpl: [
            '{url}'
        ].join('')
    }
});

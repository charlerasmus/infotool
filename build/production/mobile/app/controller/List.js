Ext.define('Mobile.controller.List', {  extend: 'Ext.app.Controller',  config: {    refs: { 		     listContainer: 'listcontainer'		  },    control: {			      listContainer: {		        nextListCommand: 'onNextListCommand'        //editNoteCommand: 'onEditNoteCommand'           }    }  },  onNextListCommand: function () {    console.log('onNextListCommand');  },//  onEditNoteCommand: function (list, record) {//    console.log('onEditNoteCommand');//  },  launch: function () {    this.callParent(arguments);    //console.log('launch');  },  init: function () {    this.callParent(arguments);    //console.log('init');  }});
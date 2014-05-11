// Builds AMD modules for each table.
// TODO finish this
// Curran Kelleher 5/10/2014
var listTables = require('./listTables.js'),
    async = require('async'),
    // TODO get UDC working as a universal module
    udc = require('../bower_components/udc/dist/udc.js');

listTables(function(tablePaths){
  async.eachSeries(tablePaths, function (tablePath, callback) {
    loadTable(tablePath, function (table) {
      table.rows.splice(5);
      console.log(JSON.stringify(table, null, 2);
    });
  }, function () {
    console.log('done');
  });
});

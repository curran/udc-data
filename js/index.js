// This script builds the UDC index (index.json) from tables (csv, json pairs).
// Curran Kelleher 5/9/2014
var listTables = require('./listTables.js'),
    utils = require('./utils');

listTables(function(tables){
  var index = { tables: tables };
  utils.output('index.json', JSON.stringify(index, null, 2));
});


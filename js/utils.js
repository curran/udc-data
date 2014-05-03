var fs = require('fs');

function input(name, callback){
  fs.readFile(name, 'utf8', function (err, data) {
    if(err) throw err;
    callback(data);
  });
}

function output(name, data){
  fs.writeFile(name, data, function(err) {
    if(err) throw err;
    console.log("Wrote "+name);
  }); 
}

// Parse a CSV row, accounting for commas inside quotes
function parse(row){
  var insideQuote = false,
      entries = [],
      entry = [];
  row.split('').forEach(function (character) {
    if(character === '"') {
      insideQuote = !insideQuote;
    } else {
      if(character == "," && !insideQuote) {
        entries.push(entry.join(''));
        entry = [];
      } else {
        entry.push(character);
      }
    }
  });
  entries.push(entry.join(''));
  return entries;
}

// Output a string for CSV.
// If a comma is present, the string is quoted.
function unparse(entry){
  if(entry.split('').indexOf(',') != -1) {
    return '"' + entry + '"';
  } else {
    return entry;
  }
}

module.exports = {
  input: input,
  output: output,
  parse: parse,
  unparse: unparse
};

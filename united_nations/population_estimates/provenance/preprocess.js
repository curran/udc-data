// A Node.js script that transforms `raw.csv` into `../population_estimates.csv`
// Curran Kelleher 5/2/2014
var fs = require('fs'),
    inFile = 'raw.csv',
    outFile = '../population_estimates.csv';

fs.readFile(inFile, 'utf8', function (err, data) {
  var rows = data.split('\r\n').slice(1),
      un_population = ['countryCode,year,population'];
  rows.splice(rows.length - 1, 1);
  rows.forEach(function (row) {
    var entries = parse(row),
        yearEntries = entries.slice(5, 66),
        countryCode = entries[4];
    yearEntries.forEach(function (value, i) {
      var year = i + 1950,
          population = value.replace(/\s+/g, '');
      un_population.push([countryCode, year, population].join(','));
    });
  });
  output(outFile, un_population.join('\n'));
});

function output(name, data){
  fs.writeFile(name, data, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote "+name);
    }
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

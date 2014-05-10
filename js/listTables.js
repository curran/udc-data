// Lists all table paths, for which there are both csv and json files.
// Curran Kelleher 5/10/2014
var recursive = require('recursive-readdir'),
    _ = require('underscore');

function listTables(callback){
  recursive('.', function (err, files) {
    var csv = names(files, '.csv'),
        json = names(files, '.json');
    callback(_.intersection(csv, json));
  });
}

// Lists the names (paths without extensions)
// for files with the given extension.
function names(files, ext){
  return files.filter(function (file) {
    return extension(file) === ext;
  }).map(name);
}

// Extracts the name from a file path.
function name(file){
  return parse(file, 'name');
}

// Extracts the extension from a file path.
function extension(file){
  return parse(file, 'extension');
}

// Extracts the name or extension from a file path.
function parse(file, nameOrExtension){
  var i = file.lastIndexOf('.');
  if(i == -1) {
    return '';
  } else if(nameOrExtension === 'name'){
    return file.substring(0, i);
  } else if(nameOrExtension === 'extension'){
    return file.substring(i);
  }
}
module.exports = listTables;

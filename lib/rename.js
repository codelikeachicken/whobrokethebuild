const chalk = require('chalk')
const watcher = require('watch')
const search = require('lunr')
const fs = require('fs')

module.exports = function(dir, name, new_name, options) {
    const deep = options.deep
    const caseSensitive = options.case_sensitive

    var data = {};
    readFiles(dir + '/', function(filename, content) {
      data[filename] = content;
      //console.log(data)
    }, function(err) {
      throw err;
    });

    console.log(chalk.green(chalk.bold('module.exports.rename.js')))
};
function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        onError(err);
        return;
      }
      filenames.forEach(function(filename) {
        fs.readFile(dirname + filename, 'utf-8', function(err, content) {
          if (err) {
            onError(err);
            return;
          }
          onFileContent(filename, content);
        });
      });
    });
  }


const chalk = require('chalk')
const watcher = require('watch')
const search = require('lunr')
const fs = require('fs')

module.exports = function(dir, name, new_name, options) {
    console.log(chalk.green(chalk.bold('module.exports.rename.js')))
};
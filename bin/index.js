#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')

const find = require('../lib/find');
const rename = require('../lib/rename');

program
    .version(chalk.yellow(chalk.bold('1.0.0')))
    .description(chalk.yellow(chalk.bold("Who Broke the Build?")))

program
    .command('rename <dir> <name> <new_name> [deep] [case-insensitive]')
    .alias('r')
    .description('rename all occurrences')
    .action((dir, name, new_name) => {
        var options = { deep: program.deep, case_insensitive: program.case_insensitive }
        rename(dir, name, new_name, options)
    })

program
    .command('find <dir> <find_what> [deep] [case-insensitive]')
    .alias('f')
    .description('find all occurrences')
    .action((dir, find_what) => {
        var options = { deep: program.deep, case_insensitive: program.case_insensitive }
        find(dir, find_what, options)
    })

program
    .option('-d, --deep', 'include subdirectories [defaults to false]')
    .option('-i, --case-insensitive', 'case insensitive [defaults to true]')

program.parse(process.argv)
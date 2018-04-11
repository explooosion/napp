#!/usr/bin/env node

'use strict'

const program = require('commander')
const chalk = require('chalk')
const fs = require('fs')
const pkg = require('./package.json')

let payload = {
  url: 'https://github.com/',
  name: 'napp',
  width: 400,
  height: 400,
}

program
  .version(pkg.version)
  .usage('[options] <args ...>')
  .option('-v, --version [value]', 'Show app version')
  .option('-n, --name [value]', 'Set app name', setName)
  .option('-w, --width [value]', 'Set app width', setWidth)
  .option('-h, --height [value]', 'Set app height', setHeight)
  .parse(process.argv)

if (program.args.length === 0) {
  program.outputHelp(
    () => {
      return chalk.white(`

      Napp ${pkg.version}

      Usage
        $ napp <url>

      Options
        --name, -n  Set app name
        --width, -w  Set app width
        --height, -h  Set app height

      Examples
        $ napp https://example.com/ -n myapp 
        Create myapp from https://example.com/ ...
    `)
    })
  return
}

/** Check url */
if (!program.args[0].includes('http')) {
  console.log(chalk.red('error:'), `unknow url ${program.args[0]}`)
  return
}

setUrl(program.args[0])
console.log(chalk.yellow('Payload'), payload)

// create link
// mklink test "F:\Electron\napp\napp-win32-ia32\napp.exe"

/**
 * Set app url
 * @param {string} val url
 */
function setUrl(val) {
  payload.url = val
}

/**
 * Set app name
 * @param {string} val name
 */
function setName(val) {
  payload.name = val
}

/**
 * Set app width
 * @param {number} val width
 */
function setWidth(val) {
  payload.width = Number(val)
}

/**
 * Set app height
 * @param {number} val height
 */
function setHeight(val) {
  payload.height = Number(val)
}
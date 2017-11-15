'use strict'

require('perish')
var logger = require('./logger')

var LOUDS = [
  'WHOA!',
  'HEY!',
  'YO YO YO!',
  'WOOO WEEEE',
  'YIPEEE',
  'YAAAHHHTTZEEEEEE'
]

var RADS = [
  '👹',
  '⚡️',
  '🦄',
  '💪🏽',
  '🧖‍️',
  '🌊'
]

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRad () {
  var index = getRandomInt(0, RADS.length - 1)
  return RADS[index]
}

function getLoud () {
  var index = getRandomInt(0, LOUDS.length - 1)
  return LOUDS[index]
}

function getLogLevel () {
  var levels = ['error', 'warn', 'info', 'verbose']
  var index = getRandomInt(0, levels.length - 1)
  return levels[index]
}
function kickoff () {
  var msg = `${getLoud()} ${getRad()}`
  logger[getLogLevel()](msg)
  setTimeout(kickoff, Math.random() * 5000)
}

logger.info('it\'s go time.')
kickoff()

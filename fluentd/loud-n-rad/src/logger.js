'use strict'

var winston = require('winston')
var config = {
  host: process.env.LOG_HOST || 'fluentd',
  port: process.env.LOG_HOST_PORT || 24224
}
var fluentTransport = require('fluent-logger').support.winstonTransport()
var logger = new (winston.Logger)({
  transports: [
    new fluentTransport('loud-n-rad', config),
    new (winston.transports.Console)()
  ]
})

module.exports = logger

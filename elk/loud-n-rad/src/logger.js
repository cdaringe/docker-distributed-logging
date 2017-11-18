'use strict'

var winston = require('winston')

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      formatter: function (info) {
        const { level, message } = info
        return JSON.stringify(Object.assign(
          {},
          info.meta,
          { level, message, timestamp: (new Date()).toISOString() })
        )
      }
    })
  ]
})

module.exports = logger

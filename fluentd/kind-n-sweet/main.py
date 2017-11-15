import logging
import os
import time
import atexit
import datetime
from fluent import handler
from pythonjsonlogger import jsonlogger

level = getattr(logging, os.getenv('LOG_LEVEL', 'DEBUG'))
log_host = os.getenv('LOG_HOST', 'fluentd')
log_port = 24224


logging.basicConfig(level=level)
logger = logging.getLogger('kind-n-sweet')

# if we used the fluent-logger
# h = handler.FluentHandler('kind-n-sweet', host=log_host, port=log_port, verbose=True)
# logger.addHandler(h)

# using a JSON logger
logHandler = logging.StreamHandler()
formatter = jsonlogger.JsonFormatter()
logHandler.setFormatter(formatter)
logger.addHandler(logHandler)

logger.info('greetings, all: ' + str(datetime.datetime.now()))

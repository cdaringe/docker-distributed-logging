import logging
import os
import time
import atexit
import datetime
from fluent import handler

level = getattr(logging, os.getenv('LOG_LEVEL', 'DEBUG'))
log_host = os.getenv('LOG_HOST', 'fluentd')
log_port = 24224


logging.basicConfig(level=level)
logger = logging.getLogger('kind-n-sweet')
h = handler.FluentHandler('kind-n-sweet', host=log_host, port=log_port, verbose=True)
logger.addHandler(h)

logger.info('greetings, all: ' + str(datetime.datetime.now()))

h.close()

import logging
from fluent import asynchandler as handler
import time
time.sleep(5) # hack to wait for fluentd to come up.  need to use health check entry point instead

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('kind-n-sweet')
h = handler.FluentHandler('kind-n-sweet', host='fluentd', port=24224)
logger.addHandler(h)
logger.info({
  'from': 'userA',
  'to': 'userB'
})
logger.info('{"from": "userC", "to": "userD"}')
logger.info("This log entry will be logged with the additional key: 'message'.")
h.close()

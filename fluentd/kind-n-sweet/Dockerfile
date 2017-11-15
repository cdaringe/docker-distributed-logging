FROM python
RUN pip install fluent-logger python-json-logger
RUN mkdir /app
COPY main.py /app/
CMD ["python", "/app/main.py"]

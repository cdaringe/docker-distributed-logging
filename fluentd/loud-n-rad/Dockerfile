FROM node
ENV TINI_VERSION v0.16.1
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]
RUN mkdir /app
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY ./src /app/src
CMD ["npm", "start"]

FROM node:latest-alpine
ENV SERVER=/server PORT=7200

RUN yarn global add pm2

WORKDIR ${SERVER}

COPY package.json yarn.lock ${SERVER}
RUN yarn install

COPY . ${SERVER}

EXPOSE ${PORT}

CMD ["pm2-runtime", "src/start.js", "ecosystem.config.js"]

FROM node:14-alpine
ENV SERVER=/server/ PORT=7200 DOCKER_COMPOSE_WAIT_VERSION=2.7.3

RUN yarn global add pm2 && yarn global add nodemon

WORKDIR ${SERVER}

COPY package.json yarn.lock ${SERVER}
RUN yarn install

COPY . ${SERVER}

EXPOSE ${PORT}

# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/${DOCKER_COMPOSE_WAIT_VERSION}/wait /wait
# RUN chmod +x /wait

CMD ["pm2-runtime", "src/start.js", "ecosystem.config.js"]

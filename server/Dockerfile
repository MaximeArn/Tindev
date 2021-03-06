FROM node:14-alpine
ENV SERVER=/server/ PORT=7200

# RUN yarn global add pm2

WORKDIR ${SERVER}

COPY package.json yarn.lock ${SERVER}
RUN yarn install

COPY . ${SERVER}

EXPOSE ${PORT}

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

# CMD /pm2-runtime src/start.js

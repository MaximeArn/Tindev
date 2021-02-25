FROM node:14-alpine

ENV SERVER=/server PORT=7200

WORKDIR ${SERVER}

COPY package.json yarn.lock ${SERVER}
RUN yarn install
COPY . ${SERVER}

EXPOSE ${PORT}
CMD ["node", "index.js"]

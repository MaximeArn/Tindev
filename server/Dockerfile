FROM node:14-alpine
ENV SERVER=/server
WORKDIR ${SERVER}
COPY package*.json yarn.lock ./
RUN yarn install
COPY . ${SERVER}
EXPOSE ${PORT}
CMD ["node", "index.js"]

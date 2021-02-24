FROM node:14-alpine
WORKDIR /src/app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE ${HOSTPORT}:${CONTAINERPORT}


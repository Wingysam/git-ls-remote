FROM node:16-alpine

RUN apk --no-cache add git

ENV NODE_ENV production
WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent

COPY . .

ENV PORT 80

CMD node index.js
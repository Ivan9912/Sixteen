FROM node:lts-alpine

WORKDIR /usr/src/app/back

COPY . .
RUN mv node_modules && npm i

EXPOSE 3001

CMD [ "node", "app.js" ]
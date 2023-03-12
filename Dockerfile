FROM node:18.7-alpine3.16

ADD . /app
WORKDIR /app
RUN npm i

WORKDIR /app/backend

ENV PORT=80
EXPOSE 80

CMD [ "server.js" ]
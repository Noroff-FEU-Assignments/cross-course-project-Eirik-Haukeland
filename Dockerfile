FROM nginx:1-alpine

ADD . /app
ADD nginx.conf /etc/nginx/conf.d/default.conf
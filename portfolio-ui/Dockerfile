FROM nginx:1.18.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/portfolio-ui usr/share/nginx/html
COPY /src/keystore/localhost.crt /etc/nginx/ssl/localhost.crt
COPY /src/keystore/localhost.key /etc/nginx/ssl/localhost.key

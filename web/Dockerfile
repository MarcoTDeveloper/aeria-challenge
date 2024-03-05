FROM node:20
WORKDIR /opt/application/web
COPY . .

RUN npm install
CMD npm run build \
  && rm -rf /var/www/html/* \
  && mv dist/* /var/www/html

FROM node:20

WORKDIR /opt/application/api
COPY . .

RUN npm install
RUN npm run build

CMD npm run migrate \
  && rm -rf ../api-build/node_modules \
  && cp -r node_modules ../api-build \
  && npm start


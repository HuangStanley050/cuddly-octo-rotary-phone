FROM node:12.3.0-alpine
WORKDIR '/app'
COPY ./package.json .
RUN npm install
COPY . .
CD ./client
RUN npm install && npm build
CD ../
CMD ["npm","run","start"]

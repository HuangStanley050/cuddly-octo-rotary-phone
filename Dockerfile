FROM node:12.3.0-alpine
WORKDIR '/app'
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm","run","start"]

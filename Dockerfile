FROM node:15.13-alpine

WORKDIR /backend

COPY package*.json ./

EXPOSE $NODE_DOCKER_PORT

RUN npm i

COPY . .

CMD ["npm", "run", "start"]
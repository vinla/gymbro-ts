FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run tsc
WORKDIR /app/build

EXPOSE 80
CMD ["node", "server.js"]
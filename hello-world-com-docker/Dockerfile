FROM node:14.8.0

LABEL AUTHOR="Mayron Ceccon<mayron.ceccon@gmail.com>"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]

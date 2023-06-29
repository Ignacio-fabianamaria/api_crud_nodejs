FROM node:16

EXPOSE 3000

WORKDIR /

COPY package*.json ./

RUN npm instal

COPY . .

CMD [ "npm", "start" ]




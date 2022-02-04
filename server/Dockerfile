FROM node:14.18.2-alpine

WORKDIR /server
VOLUME /server

COPY package*.json /server/
RUN npm install

COPY . /server/

EXPOSE 4000

CMD ["npm", "run", "start:docker"]
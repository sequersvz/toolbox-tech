FROM node:16.3.0-alpine

WORKDIR /client

COPY . /client/
RUN npm install

EXPOSE 3005

CMD ["npm", "start"]

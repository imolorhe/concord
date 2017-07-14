FROM node:6

#Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

#Install app dependencies
COPY package.json /src/app
RUN npm install

COPY . /src/app

RUN npm run build

EXPOSE 9000

CMD ["npm", "run", "start:server"]

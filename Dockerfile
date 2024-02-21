FROM node:20
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install
CMD npm run app
EXPOSE 8080
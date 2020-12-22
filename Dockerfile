FROM node:14.9.0-alpine3.10

# docker workdir
WORKDIR /home/usr/app

# copy files
COPY . .

# build the app
RUN npm i && npm run build

# expose at port 3000
EXPOSE 3000

# default command is starting the server
CMD ["npm", "run", "start"]

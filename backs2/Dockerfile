FROM node:14-alpine3.12
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*",  "./"]
RUN npm install
COPY . .
RUN apk add curl
RUN curl www.google.com
USER node
CMD ["npm", "start"]
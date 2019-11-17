FROM node:10
WORKDIR /opt/app

COPY package*.json ./

COPY src/ ./src
COPY dist ./dist
COPY tests ./tests

COPY .babelrc ./
COPY .eslintrc.js ./
COPY prettier.config.js ./
COPY webpack.config.js ./

RUN npm install
RUN npm run lint
RUN npm test

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
FROM node:14-alpine
WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn global add typescript@3.9.7 ts-node@8.10.2
RUN yarn install
COPY . ./
EXPOSE 3000

CMD [ "npm", "start" ]


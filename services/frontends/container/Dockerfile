FROM node:19-buster-slim as builder

RUN adduser --disabled-password --gecos '' app
USER app

WORKDIR /home/app/container

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

FROM builder as development
CMD npm run start

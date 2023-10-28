# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.18.0
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /project

COPY tsconfig.json ./
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY src ./src

RUN npm install pnpm -g
RUN pnpm install --frozen-lockfile
RUN pnpm run build

EXPOSE 3000

CMD [ "node", "dist/index.js" ]
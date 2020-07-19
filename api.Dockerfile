FROM node:12.18.2-alpine
EXPOSE 3000
WORKDIR /api
COPY ./app/api/* ./
RUN npm install

FROM node:12.18.2-alpine
EXPOSE 8000 9000 6006 9929 9230
WORKDIR /gatsby
COPY ./app/gatsby/* ./
RUN npm install

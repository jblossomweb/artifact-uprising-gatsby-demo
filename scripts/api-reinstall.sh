#!/bin/sh
rm -rf app/api/node_modules
mkdir app/api/node_modules
docker exec -it api rm -rf node_modules;
docker exec -it api npm install --loglevel info;
make api-deps;
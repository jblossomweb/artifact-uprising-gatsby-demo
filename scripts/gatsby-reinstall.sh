#!/bin/sh
rm -rf app/gatsby/node_modules
mkdir app/gatsby/node_modules
docker exec -it rm -rf node_modules;
docker exec -it gatsby npm install --loglevel info;
make node_modules;
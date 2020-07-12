#!/bin/sh
docker exec -it gatsby npm install --save-dev $1 --loglevel info;
make node_modules;
#!/bin/sh
docker exec -it api npm install --save $1 --loglevel info;
make api-deps;
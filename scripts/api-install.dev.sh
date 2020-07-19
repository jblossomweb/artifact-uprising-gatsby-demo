#!/bin/sh
docker exec -it api npm install --save-dev $1 --loglevel info;
make api-deps;
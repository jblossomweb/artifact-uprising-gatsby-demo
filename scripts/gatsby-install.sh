#!/bin/sh
docker exec -it gatsby npm install --save $1 --loglevel info;
make gatsby-deps;
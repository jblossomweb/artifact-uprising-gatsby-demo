#!/bin/sh
docker exec -it api npm uninstall $1 --loglevel info;
make api-deps;
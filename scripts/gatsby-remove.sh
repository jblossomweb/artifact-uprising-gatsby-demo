#!/bin/sh
docker exec -it gatsby npm uninstall $1 --loglevel info;
make node_modules;
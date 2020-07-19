#!/bin/sh
docker exec -it api npm run migrate create $1 --sql-file
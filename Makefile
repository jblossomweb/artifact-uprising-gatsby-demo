dev:
	# initial dev setup
	make stop
	make down
	make clean
	mkdir app/gatsby/node_modules
	make build
	make up
	make node_modules
	make githooks
	make logs

clean:
	# remove generated directories
	rm -rf app/gatsby/.cache
	rm -rf app/gatsby/public
	rm -rf app/gatsby/node_modules
	rm -rf app/gatsby/coverage

build:
	# build containers
	docker-compose build postgres
	docker-compose build --no-cache --force-rm gatsby

stop:
	# stop all containers
	docker-compose stop

down:
	# take down all containers
	docker-compose down

start:
	# start all containers
	docker-compose start

up:
	# start containers in background
	docker-compose up -d postgres
	docker-compose up -d gatsby

node_modules:
	# copy node_modules to host for IDE
	docker cp gatsby:/gatsby/node_modules ./app/gatsby/.
	docker cp gatsby:/gatsby/package-lock.json ./app/gatsby/.

githooks:
	# symlink git hooks
	find .git/hooks -type f -exec rm {} \; && find .githooks -type f -exec ln -sf ../../{} .git/hooks/ \;

logs:
	# follow logs
	docker-compose logs -f

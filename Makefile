dev:
	# reset
	make stop
	make down
	make clean

	# postgres
	make pg-build
	make pg-up

	# api
	make api-build
	make api-up
	make api-deps

	# data
	make data

	# gatsby
	make gatsby-build
	make gatsby-up
	make gatsby-deps

	make githooks
	make logs

clean:
	# remove generated directories
	make api-clean
	make gatsby-clean

api-clean:
	rm -rf app/api/node_modules
	rm -rf app/api/build
	mkdir app/api/node_modules

gatsby-clean:
	rm -rf app/gatsby/.cache
	rm -rf app/gatsby/public
	rm -rf app/gatsby/node_modules
	rm -rf app/gatsby/coverage
	mkdir app/gatsby/node_modules

build:
	# build containers
	make pg-build
	make api-build
	make gatsby-build

pg-build:
	docker-compose build --no-cache --force-rm postgres

api-build:
	docker-compose build --no-cache --force-rm api

gatsby-build:
	docker-compose build --no-cache --force-rm gatsby

up:
	# bring up containers in background
	make pg-up
	make api-up
	make gatsby-up

pg-up:
	docker-compose up -d postgres

api-up:
	docker-compose up -d api

gatsby-up:
	docker-compose up -d gatsby

down:
	# take down all containers
	docker-compose down --remove-orphans

start:
	# start all containers
	make pg-start
	make api-start
	make gatsby-start

pg-start:
	docker-compose start postgres

api-start:
	docker-compose start api

gatsby-start:
	docker-compose start gatsby

stop:
	# stop all containers
	make gatsby-stop
	make api-stop
	make pg-stop

pg-stop:
	docker-compose stop postgres

api-stop:
	docker-compose stop api

gatsby-stop:
	docker-compose stop gatsby

pg-reset:
	make pg-stop
	make pg-start

api-reset:
	make api-stop
	make api-start

gatsby-reset:
	make gatsby-stop
	make gatsby-start

deps:
	# copy node_modules to host for IDE
	make api-deps
	make gatsby-deps

api-deps:
	docker cp api:/api/node_modules ./app/api/.
	docker cp api:/api/package-lock.json ./app/api/.

gatsby-deps:
	docker cp gatsby:/gatsby/node_modules ./app/gatsby/.
	docker cp gatsby:/gatsby/package-lock.json ./app/gatsby/.

data:
	# run db migrations
	docker exec -it api npm run migrate up

tests:
	# run tests
	# make api-tests
	make gatsby-tests

api-tests:
	./scripts/api-run.sh test

gatsby-tests:
	./scripts/gatsby-run.sh test

gatsby-test-watch:
	./scripts/gatsby-run.sh test:watch

coverage:
	# run coverage reports
	# make api-coverage
	make gatsby-coverage
	
api-coverage:
	./scripts/api-run.sh test:coverage

gatsby-coverage:
	./scripts/api-run.sh test:coverage

storybook:
	# run storybook
	./scripts/gatsby-run.sh storybook

format:
	# run all linters
	make gatsby-format

gatsby-format:
	./scripts/gatsby-run.sh format

githooks:
	# symlink git hooks
	find .git/hooks -type f -exec rm {} \; && find .githooks -type f -exec ln -sf ../../{} .git/hooks/ \;

logs:
	# follow logs
	docker-compose logs -f

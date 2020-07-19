<h2>
  <p>
  <a href="https://www.docker.com/" target="_blank">
    <img alt="Docker" src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png" height="60" />
  </a>
  &nbsp;
  <a href="https://www.postgresql.org/" target="_blank">
    <img alt="PostgreSQL" src="https://www.postgresql.org/media/img/about/press/elephant.png" height="60" />
  </a>
  &nbsp;
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img alt="Typescript" src="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png" height="60" />
  </a>
  &nbsp;
  <a href="https://www.gatsbyjs.org/" target="_blank">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" height="60" />
  </a>
  &nbsp;
  <a href="https://reactjs.org/" target="_blank">
    <img alt="React" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" height="60" />
  </a>
  &nbsp;
  <a href="https://jestjs.io/" target="_blank">
    <img alt="Jest" src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" height="60" />
  </a>
  &nbsp;
  <a href="https://storybook.js.org/" target="_blank">
    <img alt="Storybook" src="https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_200x200.png" height="60" />
  </a>
  &nbsp;
  </p>
</h2>

# Artifact Uprising Gatsby Demo

<img src="https://i.giphy.com/media/g9582DNuQppxC/giphy.webp" width="530" />

## 🚀 Quick start

1. **Download and install Docker, if you haven't already:**

    [`https://docs.docker.com/get-docker/`](https://docs.docker.com/get-docker/)

2.  **Clone this repository, and navigate into its directory:**

    ```shell
    git clone git@github.com:jblossomweb/artifact-uprising-gatsby-demo.git
    cd artifact-uprising-gatsby-demo
    ```

3.  **With Docker running, build the dev environment, and start the containers:**

    ```shell
    make dev
    ```
    
    Wait until it has completely finished.<br>
    Now is a good time get a cup of coffee. This may take a few minutes...&nbsp;☕

4.  **Open your browser to [`http://localhost:8000`](http://localhost:8000)**

    PostgreSQL database is now running at:<br>
    `postgres://user:pass@localhost:5432/demo_products`<br>

    Node Express REST API is now running at:<br>
    [`http://localhost:3000`](http://localhost:3000)<br>

    Gatsby GraphQL is now running at:<br>
    [`http://localhost:8000/___graphql`](http://localhost:8000/___graphql)<br>

    Gatsby SSR front-end is now running at:<br>
    [`http://localhost:8000`](http://localhost:8000)<br>

4.  **Open the source code in either `app/api` or `app/gatsby` and start editing!**

    Save your changes in `app/api` and the server should rebuild in real time.<br>
    Save your changes in `app/gatsby` to see the browser update in real time.<br>

# 💫 Handy Commands

Here are some handy commands for reference. Make sure to run them from the root of this directory.

### `make storybook`

**Build and start Storybook in dev watch mode.**

Builds and starts the Component Storybook for `app/gatsby`.<br>

Now open your browser to:<br>
[`http://localhost:6006/`](http://localhost:6006/)<br>

Requires `gatsby` container to be running. See [`Makefile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/Makefile) for details.<br>

### `make tests`

**Run all tests.**

Runs Jest test runners for `app/api` and `app/gatsby`. All expected output will be See [`Makefile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/Makefile) for details.

### `make coverage`

**Run all tests, and create a coverage report.**

Runs Jest test runner for `app/api` and `app/gatsby`. See [`Makefile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/Makefile) for details.<br>
This will create coverage directories at `app/api/coverage` and `app/gatsby/coverage`.<br>

Now open your browser to:<br>
[`file:///path/to/artifact-uprising-gatsby-demo/app/api/coverage/lcov-report/index.html`](file:///path/to/artifact-uprising-gatsby-demo/app/api/coverage/lcov-report/index.html) or<br>
[`file:///path/to/artifact-uprising-gatsby-demo/app/gatsby/coverage/lcov-report/index.html`](file:///path/to/artifact-uprising-gatsby-demo/app/gatsby/coverage/lcov-report/index.html)<br>
    (where `/path/to/artifact-uprising-gatsby-demo/` is the path to this directory)

### `make data`

**Run any pending database migrations.**

Runs any migrations that are in the [`app/api/migrations`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/app/api/migrations) directory, but not yet run, according to the `migrations` table in the database.<br>

Requires `api` container to be running. Most stories are co-located with their respective components. See [`Makefile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/Makefile) for details.<br>

### `make format`

**Run all linters.**

Runs linters for `api` and `gatsby`.<br>

Requires `api` and `gatsby` containers to be running. See [`Makefile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/Makefile) for details.<br>

### `make logs`

**Follow Docker logs.**

Follows aggregated logs to STDOUT from `pg`, `api`, and `gatsby`.<br>
Useful to re-enter in the case one ctrl-C's out to run other commands.<br>
Note: ctrl-C does not stop any containers, just exits the logs.

See [`Makefile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/Makefile) for details.<br>

### `make dev`

**Rebuild, re-install modules, and restart dev containers.**

Creates a fresh dev environment, as described above.<br>

Now open your browser to:<br>
[`http://localhost:8000/`](http://localhost:8000/)<br>

Tears everything down first. See [`Makefile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/Makefile) for details.<br>
Note: as long as the `app/data` folder remains intact, all data will be preserved.



# 💫 Advanced Commands

Some advanced commands can aliased for ergonomic purposes.<br>
Run the following to activate the aliases:

```shell
source .aliases
``` 

Now the following can be run:

### `api-run`

**Run an NPM script defined in `app/api/package.json`**

Runs any script defined in `app/api/package.json` <b>from inside the container</b>. All expected output will be seen from the host terminal.

eg:
```
api-run test:watch
```

### `api-install`

**Install an npm module to API app**

Installs and saves an npm module to API app <b>from inside the container</b>, to rule out node version or binary mismatches. This also rewrites `npm_modules` to the host for IDE purposes. It is recommended to stop and restart the container after doing so.

eg:
```
api-install some-npm-module && make api-reset
```

### `api-install-dev`

**Install a dev npm module to API app**

Installs and saves a dev npm module to API app <b>from inside the container</b>, to rule out node version or binary mismatches. This also rewrites `npm_modules` to the host for IDE purposes. It is recommended to stop and restart the container after doing so.

eg:
```
api-install-dev some-npm-module && make api-reset
```

### `gat-run`

**Run an NPM script defined in `app/gatsby/package.json`**

Runs any script defined in `app/gatsby/package.json` <b>from inside the container</b>. All expected output will be seen from the host terminal.

eg:
```
gat-run test:watch
```

### `gat-install`

**Install an npm module to Gatsby app**

Installs and saves an npm module to Gatsby app <b>from inside the container</b>, to rule out node version or binary mismatches. This also rewrites `npm_modules` to the host for IDE purposes. It is recommended to stop and restart the container after doing so.

eg:
```
gat-install some-npm-module && make gatsby-reset
```

### `gat-install-dev`

**Install a dev npm module to Gatsby app**

Installs and saves a dev npm module to Gatsby app <b>from inside the container</b>, to rule out node version or binary mismatches. This also rewrites `npm_modules` to the host for IDE purposes. It is recommended to stop and restart the container after doing so.

eg:
```
gat-install-dev some-npm-module && make gatsby-reset
```

# 💫 More Commands

For more information and commands, see the following files for reference:

- [`Makefile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/Makefile)
- [`.aliases`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/.aliases)
- [`/scripts`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/scripts)
- [`package.json`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/package.json)
- [`docker-compose.yml`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/docker-compose.yml)

<h1>
  <a href="https://www.docker.com/" target="_blank">
    <img alt="Docker" src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png" height="60" />
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
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img alt="Typescript" src="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png" height="60" />
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
</h1>

# Artifact Uprising Gatsby Demo

![](https://i.giphy.com/media/g9582DNuQppxC/giphy.webp)

## 🚀 Quick start

1.  **Clone this repository, and navigate into its directory.**

    ```shell
    git clone git@github.com:jblossomweb/artifact-uprising-gatsby-demo.git
    cd artifact-uprising-gatsby-demo
    ```

2.  **Build the dev environment, and start the containers.**

    ```shell
    make dev
    ```

    ☕ get a cup of coffee, this may take a few minutes.

3.  **Open the source code and start editing!**

    Your site is now running at [`http://localhost:8000`](http://localhost:8000)<br>
    Your GraphQL is now running at [`http://localhost:8000/\_\_\_graphql`](http://localhost:8000/___graphql)

    Save your changes and the browser will update in real time!

## 💫 Handy Commands

Note: To rule out potential node version mismatches, it would be wise to run any npm commands from inside the running container. Some shell scripts are in place to make this more intuitive.

These scripts can be aliased for ergonomic purposes. So be sure to run this first:

```shell
source .aliases
```

### Commands

1.  **Install an npm module to Gatsby app**

    This also rewrites npm_modules to the host for IDE/debugging purposes.

    ```shell
    gat-install some-npm-module
    ```

2.  **Install a dev npm module to Gatsby app**

    This also rewrites npm_modules to the host for IDE/debugging purposes.

    ```shell
    gat-install-dev some-npm-module
    ```

3.  **Remove an npm module from Gatsby app**

    This also rewrites npm_modules to the host for IDE/debugging purposes.

    ```shell
    gat-remove some-npm-module
    ```

4.  **Run the Gatsby app's linter**

    ```shell
    gat-run format
    ```

5.  **Run the Gatsby app's tests in watch mode**

    ```shell
    gat-run test:watch
    ```

6.  **Run the Gatsby app's tests and generate a coverage report**

    ```shell
    gat-run test:coverage
    ```

    Now open your browser to:<br> [`file:///path/to/artifact-uprising-gatsby-demo/coverage/lcov-report/index.html`](file:///path/to/artifact-uprising-gatsby-demo/coverage/lcov-report/index.html)<br>
    (where `/path/to/artifact-uprising-gatsby-demo/` is the path to this directory)

7.  **Run Gatsby app's Storybook**

    ```shell
    gat-run storybook
    ```

    Now open your browser to:<br>[`http://localhost:6006/`](http://localhost:6006/)

8.  **Stop all containers**

    ctrl-C will only stop following the logs.<br>
    Run this to stop all containers.<br>

    ```shell
    make stop
    ```

9.  **Start all containers**

    Run this to start all containers.<br>

    ```shell
    make start
    ```

10. **Stop and take down all containers**

    Run this to take down all containers.<br>

    ```shell
    make down
    ```

11. **Stand up and start all containers**

    Run this to stand up and start all containers.<br>

    ```shell
    make up
    ```

12. **Rebuild, re-install modules, and restart dev containers**

    Run this to rebuild from scratch.<br>
    You may want to prune if done frequently.<br>

    ```shell
    make dev
    ```

    ☕ get a cup of coffee, this may take a few minutes.

    Now open your browser to:<br>[http://localhost:8000/](http://localhost:8000/)

13. **Follow logs**

    Useful in the case one ctrl-C's out of them.<br>
    Containers must be running.

    ```shell
    make logs
    ```

For more information and commands, see the following files for reference:

- [`Makefile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/Makefile)
- [`.aliases`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/.aliases)
- [`package.json`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/package.json)
- [`gatsby.Dockerfile`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/gatsby.Dockerfile)
- [`docker-compose.yml`](https://github.com/jblossomweb/artifact-uprising-gatsby-demo/blob/master/docker-compose.yml)

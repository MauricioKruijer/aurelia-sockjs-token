# aurelia-sockjs-token

This project is based on the Aurelia-skeleton-navigation. It contains Express as backend server with a few modified scripts.

I'm trying to implement node-token-sockjs with Aurelia.

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm endpoint config github` and following the prompts.

5. Install backend packages

  ```shell
  npm install
  ```
6. Install Aurelia packages

  ```shell
  npm run aurelia-npm
  ```
7. Install Aurelia jspm packages

  ```shell
  npm run aurelia-jspm
  ```
6. To run the app, execute the following command: (DEVELOPMENT)

  ```shell
  npm run watch
  ```
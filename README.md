# NCKU mathematics web app skaffold

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.
It is a proof-of-concept website for modern web development.

It uses a reliable frontend framework, [Angular](https://angular.io/), and [Angular Material UI & CDK](https://material.angular.io/) to provide the frontend routing and data serving.

This project does not contain a datastore layer. It's a client-side app. Check Firebase Firestore, or implement a set APIs to gain data persistency.

To the next stage, one can integrate Firebase firestore or abstract the data layer by implementing angular services.

The route is configured with the prefix `/u/`, which leaves a room for backend API routing, such as `/b/seminars/list`, which is not scoped here. One can configure it through `baseHref` in the `angular.json` file, the `index.html` should not be changed.

## Prepare development environment

- [install nodejs](https://nodejs.org/en/download/) or [install npm through fnm](https://github.com/Schniz/fnm)
- install npm (may installed automatically when insatll nodejs)
- (optional) install angular CLI globally `npm install -g @angular/cli`
- in the source code directory, run `npm install` to install all dependencies

There you have it. Happy coding and build the static files!
Run `ng serve` to see how it works!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Additional, angular material add schematics to angular CLI, you can use `ng generate @angular/material:x component-name` to generate skelton codes. Learn more on [angular material](https://material.angular.io/guide/schematics).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Serve static pages

To serve a single page application (SPA) like angular, it is needed to route all paths beneath the base path to the entrypoint, index.html, and let javascript framework render the page for the browser.

The idea is explained well on angular website, [deploying an application](https://angular.io/start/start-deployment) and [Building and serving Angular apps](https://angular.io/guide/build). You must have some rewrite functionalities on the web server.

Here's one deploying on Google App Engine standard

```yaml
runtime: go116
instance_class: F1

handlers:
  # real files
  - url: /u/assets
    static_dir: dist/ncku-math/assets
  - url: /u/(.*\.(ico|js|css))
    static_files: dist/ncku-math/\1
    upload: dist/ncku-math/.*\.(ico|js|css)
  # route to entrypoint
  - url: /
    static_files: dist/ncku-math/index.html
    upload: dist/ncku-math/index.html
  - url: /u/
    static_files: dist/ncku-math/index.html
    upload: dist/ncku-math/index.html
  - url: /u/.*
    static_files: dist/ncku-math/index.html
    upload: dist/ncku-math/index.html
  # route to backend service
  # receiving all remaining routes
  #
  # you need at least one route to the backend service
  # or the deployment will fail.
  - url: /.*
    script: auto
```

Noting that you must have at least one `script:auto` with your backend code or the deployment will fail. (App Engine's constraint)

The `/u` is our custom prefix, labeled in `baseHref`, as I mentioned earlier in the first section.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

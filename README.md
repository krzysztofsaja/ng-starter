# Angular ES6 Starter (Generators, SCSS, i18n, Tests, Webpack, Bootstrap )

## Features
* ES 6 (JavaScript 2015)
* app structure base on new component syntax
* generators for scaffolding components and directives for consistent file structures and fast bootstrapping
* Webpack ang Gulp
* Browser Sync
* NPM based (without bower)
* PostCSS tasks (removing unused css classes, autoprefixing, font magician)
* internationalization (i18n) with directive for changing language
* API access with Ng-Resource
* unit tests with Karma, Mocha, Chai, and PhantomJS (for CI)
* SCSS and Bootstrap
* ESLint
* deployment bash scripts for CI
* Gitlab CI configuration files
* editors config files

## Demo: [http://ng-starter.escript.ninja](http://ng-starter.escript.ninja)
## File Structure
Here's how it looks:
```
client
⋅⋅app/
⋅⋅⋅⋅app.js * app entry file
⋅⋅⋅⋅app.html * app template
....assets/ * global styles, images and vendor scripts
⋅⋅⋅⋅common/ * functionality pertinent to several components propagate into this directory
....directives/ * where directives live
⋅⋅⋅⋅components/ * where components live
⋅⋅⋅⋅⋅⋅components.js * components entry file
⋅⋅⋅⋅⋅⋅home/ * home component
⋅⋅⋅⋅⋅⋅⋅⋅home.js * home entry file (routes, configurations, and declarations occur here)
⋅⋅⋅⋅⋅⋅⋅⋅home.component.js * home "directive"
⋅⋅⋅⋅⋅⋅⋅⋅home.controller.js * home controller
........home.service.js * home service
⋅⋅⋅⋅⋅⋅⋅⋅home.scss * home styles
⋅⋅⋅⋅⋅⋅⋅⋅home.html * home template
⋅⋅⋅⋅⋅⋅⋅⋅home.spec.js * home specs (for entry, component, and controller)
```

# Getting Started
## Dependencies
Tools needed to run this app:
* `node` and `npm`

If you want to generate new component or directive, its is recommended to install gulp globally by:
`npm install -g gulp`

However, you can still use local version of gulp like this:

`node_modules/.bin/gulp component --name myComp`

## Running the App
Basic npm scripts to handle the app:
* npm start  // Starting app in development mode
* npm run build // Building production packages
* npm run test // Test application
* npm run deploy // Deploying production build to remote server via rsync
 
## Generating Components and Directives
Starter can scaffolds a new Angular component or directive
The component boilerplate task generates this:
```
⋅⋅⋅⋅⋅⋅componentName/
⋅⋅⋅⋅⋅⋅⋅⋅componentName.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅componentName.component.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.controller.js
........componentName.service.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.html
⋅⋅⋅⋅⋅⋅⋅⋅componentName.scss // scoped to affect only its own template
⋅⋅⋅⋅⋅⋅⋅⋅componentName.spec.js // contains passing demonstration tests
```

The directive boilerplate task generates this:
```
⋅⋅⋅⋅⋅⋅directiveName/
⋅⋅⋅⋅⋅⋅⋅⋅directiveName.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅directiveName.controller.js
⋅⋅⋅⋅⋅⋅⋅⋅directiveName.directive.js
........directiveName.service.js
⋅⋅⋅⋅⋅⋅⋅⋅directiveName.html
⋅⋅⋅⋅⋅⋅⋅⋅directiveName.scss // scoped to affect only its own template
⋅⋅⋅⋅⋅⋅⋅⋅directiveName.spec.js // contains passing demonstration tests
```

To generate a component, run `gulp component --name componentName`.
To generate a directive, run `gulp directive --name componentName`.

The parameter following the `--name` flag is the name of the component/directive to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component/directive.

The component will be created, by default, inside `client/app/components`. To change this, apply the `--parent` flag, followed by a path relative to `client/app/components/`.

For example, running `gulp component --name signup --parent auth` will create a `signup` component at `client/app/components/auth/signup`.  

Because the argument to `--name` applies to the folder name **and** the actual component name, make sure to camelcase the component/directive names.

# Disclaimer
> This starter is upgraded and modified version of NG6 Angular Starter by [AngularClass](https://angularclass.com)
Licence: Apache 2.0

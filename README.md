# hello-angular-2-typescript
A simple example of Hello World in Angular 2.x coded in [Microsoft's TypeScript](http://www.typescriptlang.org/).

Somethings to know:

1. [Traceur](https://github.com/google/traceur-compiler) is utilized to bring [EcmaScript 6](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts) functionality into today's browsers
2. This example utilizes the [JSPM](http://jspm.io/) package manager and the [SystemJS](https://github.com/systemjs/systemjs) module loader
3. This example links to Angular's CDN to utilize a dev version [Angular 2.x](https://code.angularjs.org/2.0.0-alpha.25/angular2.dev.js)
4. [Angular 2.x developer documentation](https://angular.io/)

## What is this?
This example shows how to take a model property defined in an Angular 2.x Component and populate it within an Angular view.

## Instructions 
1. Install NodeJS
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. Angular and Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080` in your web browser

## How to utilize the TypeScript Compiler
This application was created via [WebStorm](https://www.jetbrains.com/webstorm/) on OSx

1. You will need to get TypeScript installed
    * TypeScript will be installed via NPM (i.e. the NodeJS Package Manager)
    * Run `npm install -g typescript` to install TypeScript globally
    * Run `tsc -v` to see what version of TypeScript was installed ... it should be `TS6029: Version 1.5.0-beta`
2. Get WebStorm to utilize TypeScript 1.5 instead of 1.4
    * Go to `Preferences > Languages & Frameworks > TypeScript` and select custom compiler click `enable`
    * Have the compiler point to the newly installed version of TypeScript `/usr/local/lib/node_modules/typescript/bin`
    * Modify the TypeScript compiler options `-m commonjs -t es5` allowing us to use CommonJS modular format and output into EcmaScript 5
    * Modify the output path to send compiled code to the components folder `hello-angular-2-typescript/src/components`
    * When WebStorm asks if to enable the TypeScript compiler
3. Make sure to include a reference to Angular 2.x type definitions
    * Install TypeScript definitions via `npm install -g tsd`
    * Install the Angular 2.x specific tsd via `tsd query angular2 --action install`
    * Include a link to the type definitions that were brought in via `tsd` at the top of the AngularJS component file: `/// <reference path="../../typings/angular2/angular2.d.ts" />`
    


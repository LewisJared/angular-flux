## Angular2-flux

An application example for the [Flux][http://facebook.github.io/flux/docs/overview.html#content] application architecture built using Angular2.

## Why Angular 2?
Flux is based on one way data flow. This is difficult to do in Angular 1.x due to its two way databinding. In order to emulate the one way data flow in Angular 1.x, additional modules such as [flux-angular][https://github.com/christianalfoni/flux-angular] were required to implement a immutable store.
Angular2 is a redesign of the 1.x framework and now has the one way databinding functionality. Angular 2 is currently in developer preview and the API will/has changed

## Getting started
angular2-flux build process is managed by Gulp. The required dependencies can be installed using npm:
    '''
    npm install
    '''

To build and serve the application locally:
    '''
    gulp serve
    '''
The application will now be available at [localhost:8080]
/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';


@Component({
    selector: 'my-app'
    })
@View({
    template: '<p>Hello {{name}}</p>'
    })
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Jared test';
    }
}

bootstrap(MyAppComponent);
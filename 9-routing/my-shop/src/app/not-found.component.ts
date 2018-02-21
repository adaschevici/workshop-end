import { Component } from '@angular/core';


@Component({
    selector: 'not-found',
    template: `
        <div>
            Oops, these are not the droids you are looking for,
            go <a routerLink="/">home</a>?
        </div>
    `
})
export class NotFoundComponent{}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <div>
        <button [disabled]="isDisabled" (click)="clickFunction($event)">bigbutton</button>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  isDisabled: boolean;

  constructor() {
    this.title = 'App Title';
    console.log('Already instantiated the app');
  }

  ngOnInit() {
    console.log('Calling ng init');
    this.isDisabled = false;
    this.title = 'Better App Title';
  }

  clickFunction() {
    console.log('Called a click');
  }

}

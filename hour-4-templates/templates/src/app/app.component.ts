import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
        <button [disabled]="isDisabled">bigbutton</button>
      </h1>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'App Title';
    this.isDisabled = false;
    console.log('Already instantiated the app');
  }

  ngOnInit() {
    console.log('Calling ng init');
    this.title = 'Better App Title';
  }

}

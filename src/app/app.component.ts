import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <h5>Todo list</h5>
    <ol>
      <li>Add components: header, robot-list, part-list</li>
      <li>Set routing for robots and parts </li>
      <li>Add model (classes) for Robot, Part, according to mock data</li>
      <li>Update mock with Robot and Part models</li>
      <li>Add parts and robots data services</li>
      <li>Connect data services to mock data and lists components</li>
      <li>Add styles to scss files</li>
      <li>Install angular-in-memory-web-api (so we can simulate http requests)</li>
      <li>Add HttpClient and subscribe to get data</li>
    </ol>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

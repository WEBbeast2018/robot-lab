import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      ROBOT LAB
    </h1>
    <nav>
      <button routerLink="/robots">
        Robots
      </button>
      <label routerLink="/parts">
        Parts
      </label>
    </nav>
    <ol>
      <li>Add components: header, robot-list, parts-details</li>
      <li>Set routing for robots and parts </li>
      <li>Add model (classes) for Robot, Part, according to mock data</li>
      <li>Update mock with Robot and Part models</li>
      <li>Add parts and robots data services</li>
      <li>Connect data services to mock data and lists components</li>
      <li>Add styles to scss files (use commented styles in style,</li>
    </ol>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot-list',
  template: `
    <ul>
      <li>Robot 1</li>
      <li>Robot 2</li>
    </ul>
  `,
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

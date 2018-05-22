import { Component, OnInit } from '@angular/core';
import { Robot } from '../../models/robot.model';
import { RobotsService } from '../../services/robots.service';

@Component({
  selector: 'app-robot-list',
  template: `
    <ul class="robots-container">
      <li *ngFor="let robot of robots" class="robot-card">
        <div>
          <img src="/assets/images/robotic-arm.png"/>
          <label>
            <b>{{robot.name}}</b>
          </label>
        </div>
        <div>
          <label>Age: </label> {{robot.age}}
        </div>
        <div>
          <label>Type: </label>{{robot.type}}
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {
  robots: Robot[];

  constructor(private robotsService: RobotsService) { }

  ngOnInit() {
    this.robotsService.getRobots().subscribe((data) => {
      this.robots = data
    });
  }

}

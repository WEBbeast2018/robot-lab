import { Component, OnInit } from '@angular/core';
import { Robot } from '../../models/robot.model';
import { RobotsService } from '../../services/robots.service';

@Component({
  selector: 'app-robot-list',
  template: `
    <ul>
      <li *ngFor="let robot of robots">
        {{robot.name}}
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

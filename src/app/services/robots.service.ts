import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import { ROBOTS } from '../mocks/robots.mocks';
import { Robot } from '../models/robot.model';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  constructor() { }

  getRobots(): Observable<Robot[]> {
    return of(ROBOTS);
  }
}

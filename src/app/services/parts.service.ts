import { Injectable } from '@angular/core';
import { PARTS } from '../mocks/parts.mocks';
import { Part } from '../models/part.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor() { }

  getParts(): Observable<Part[]> {
    return of(PARTS);
  }
}

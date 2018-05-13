import { Component, OnInit } from '@angular/core';
import { PartsService } from '../../services/parts.service';
import { Part } from '../../models/part.model';

@Component({
  selector: 'app-part-list',
  template: `
    <ul class="parts-container">
      <li *ngFor="let part of parts" class="part-card">{{part.name}}</li>
    </ul>
  `,
  styleUrls: ['./part-list.component.scss']
})
export class PartListComponent implements OnInit {
  parts: Part[];

  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.partsService.getParts().subscribe((data) => {
      this.parts = data
    });
  }

}

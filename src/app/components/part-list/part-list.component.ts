import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-list',
  template: `
    <ul>
      <li>Part 1</li>
      <li>Part 2</li>
    </ul>
  `,
  styleUrls: ['./part-list.component.scss']
})
export class PartListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>
      ROBOT LAB
    </h1>
    <nav>
      <button routerLink="/robots">
        Robots
      </button>
      <button routerLink="/parts">
        Parts
      </button>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

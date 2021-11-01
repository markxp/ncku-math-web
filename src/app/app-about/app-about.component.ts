import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.css'],
})
export class AppAboutComponent implements OnInit {
  links = [
    { path: 'history', title: 'Histroy' },
    { path: 'location', title: 'Loction' },
    { path: 'committee', title: 'Committee' },
    { path: 'rules', title: 'Rules' },
    { path: 'directory', title: 'Directory' },
  ];

  activeLink = null;

  constructor() {}

  ngOnInit(): void {}
}

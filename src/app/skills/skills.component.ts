import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      name: 'Angular',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
    },
    {
      name: 'Ionic',
      logo: 'https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png'
    }
  ];
  constructor() { }

  ngOnInit() {}

}

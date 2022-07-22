import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      name: 'Angular - TypeScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
      expertise: '80%',
      description: 'Uso de rutas, rxjs operators, permisos con AuthGuard.'
    },
    {
      name: 'Ionic',
      logo: 'https://ionicframework.com/img/meta/logo.png',
      expertise: '90%',
      description: 'Maquetación web y mobile responsive para ambas plataformas, utilización en variedad de proyectos.'
    },
    {
      name: 'dotNET - C#',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png',
      expertise: '70%',
      description: 'WinForms, Entity Framework'
    },
    {
      name: 'CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
      expertise: '90%',
      description: 'Diseño responsive, flexbox.'
    },
    {
      name: 'HTML',
      logo: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png',
      expertise: '90%',
      description: 'Maquetación web.'
    },
  ];
  constructor() { }

  ngOnInit() {}

}

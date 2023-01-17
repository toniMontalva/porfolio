/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  visibleAngular = false;
  visibleIonic = false;
  visibleDotNet = false;
  visibleCSS = false;
  visibleHTML = false;

  skills = [
    {
      id: 0,
      name: 'Angular - TypeScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
      expertise: '100%',
      description: 'Creación de componentes, rutas, guards. Inyección de servicios, utilización de rxjs operators, llamadas a API externas. Google Maps, Geolocation con Google API. Autentificación de usuarios con Firebase'
    },
    {
      id: 1,
      name: 'Ionic',
      logo: 'https://ionicframework.com/img/meta/logo.png',
      expertise: '100%',
      description: 'Maquetación web y mobile responsive, despliegue de apps en stores.'
    },
    {
      id: 2,
      name: 'dotNET - C#',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png',
      expertise: '70%',
      description: 'WinForms, Entity Framework'
    },
    {
      id: 3,
      name: 'CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
      expertise: '90%',
      description: 'Diseño responsive con @media queries, flexbox. Animaciones con @keyframes.'
    },
    {
      id: 4,
      name: 'HTML',
      logo: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png',
      expertise: '90%',
      description: 'Maquetación web.'
    },
  ];
  constructor() { }

  ngOnInit() {}

  openInfo(skill) {
    switch(skill.id) {
      case 0:
        this.visibleAngular = true;
        break;
      case 1:
        this.visibleIonic = true;
        break;
      case 2:
        this.visibleDotNet = true;
        break;
      case 3:
        this.visibleCSS = true;
        break;
      case 4:
        this.visibleHTML = true;
        break;
    }
  }

}

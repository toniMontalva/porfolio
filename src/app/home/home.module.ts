import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SkillsComponent } from '../skills/skills.component';
import { BackgroundComponent } from '../background/background.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FormacionComponent } from '../formacion/formacion.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    SkillsComponent,
    BackgroundComponent,
    ToolbarComponent,
    FormacionComponent,
    ProyectosComponent
  ],
})
export class HomePageModule {}

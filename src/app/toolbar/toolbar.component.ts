/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  mobile = false;
  desktop = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    if (this.platform.is ('mobile')) {
      this.mobile = true;
    } else {
      this.desktop = true;
    }
    this.platform.resize.subscribe(async => {
      if (this.platform.is('mobile') || (this.platform.width() < 800)) {
        this.mobile = true;
        this.desktop = false;
      } else {
        this.desktop = true;
        this.mobile = false;
      }
    });
  }
}

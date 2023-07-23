import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss'],
})
export class FormacionComponent implements OnInit {
  @ViewChild('formacionInfo', { static: false}) pInfo: ElementRef;
  showFormacionInfo = false;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {}

  openFormacionInfo() {
    this.showFormacionInfo = true;
    this.renderer2.setStyle(this.pInfo.nativeElement, 'opacity', '1');
    this.renderer2.setStyle(this.pInfo.nativeElement, 'transition', 'opacity 1s');

  }

  closeFormacionInfo() {
    setTimeout(() => {
      this.showFormacionInfo = false;
    }, 800);
    this.renderer2.setStyle(this.pInfo.nativeElement, 'opacity', '0');
    this.renderer2.setStyle(this.pInfo.nativeElement, 'transition', 'opacity 1s');
  }

}

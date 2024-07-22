import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss'],
})
export class FormacionComponent implements OnInit {
  @ViewChild('fpInfo', { static: false}) fpInfo: ElementRef;
  @ViewChild('ceInfo', { static: false}) ceInfo: ElementRef;
  showFpInfo = false;
  showCeInfo = false;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {}

  openInfo(type: 'fp' | 'ce') {
    this.setInfo(type, true);
    if (type === 'fp') {
      this.renderer2.setStyle(this.fpInfo.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.fpInfo.nativeElement, 'transition', 'opacity 1s ease-out');
    } else {
      this.renderer2.setStyle(this.ceInfo.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.ceInfo.nativeElement, 'transition', 'opacity 1s ease-out');
    }
  }

  closeInfo(type: 'fp' | 'ce') {
    setTimeout(() => {
      this.setInfo(type, false);
    }, 800);
    if (type === 'fp') {
      this.renderer2.setStyle(this.fpInfo.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.fpInfo.nativeElement, 'transition', 'opacity 1s ease-out');
    } else {
      this.renderer2.setStyle(this.ceInfo.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.ceInfo.nativeElement, 'transition', 'opacity 1s ease-out');
    }
  }

  setInfo(type: 'fp' | 'ce', value: boolean) {
    if (type === 'ce') {
      this.showCeInfo = value;
    } else {
      this.showFpInfo = value;
    }
  }

}

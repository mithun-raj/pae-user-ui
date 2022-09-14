import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() langChangeEmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('PAE-LANG','EN-US');
  }
  setLang(lang: any) {
    localStorage.setItem('PAE-LANG',lang);
    this.langChangeEmit.emit(lang);
  }
}

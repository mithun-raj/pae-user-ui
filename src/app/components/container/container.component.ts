import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  selectedLang: any = 'US-EN';
  constructor() { }

  ngOnInit(): void {
  }
  langChange(lang: any) {
    this.selectedLang= lang;
    }
}

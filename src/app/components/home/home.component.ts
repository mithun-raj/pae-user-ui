import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from 'src/app/_services/common/common.service';
import { PageObject } from 'src/app/_shared/model/page-object';
import Structure from '../../../assets/structure-home.json';
import StructureArabic from '../../../assets/structure-home-arabic.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() selectedLang: any;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }
submenu: any= [{header: 'SubMenuHeader1', body: 'SubMenuBody1', buttonText: 'SubMenubutton1'},
{header: 'SubMenuHeader2', body: 'SubMenuBody2', buttonText: 'SubMenubutton2'},
{header: 'SubMenuHeader3', body: 'SubMenuBody3', buttonText: 'SubMenubutton3'},
{header: 'SubMenuHeader4', body: 'SubMenuBody4', buttonText: 'SubMenubutton4'}
];
pageObject: PageObject[] = Structure;

appendString(str:any) {
  
  return this.commonService.appendString(str, this.pageObject);
}

changeLang() {
  if(this.selectedLang === 'EN-US') {
    this.pageObject  = Structure;
  } else if(this.selectedLang === 'AR') {
    this.pageObject  = StructureArabic;
  }
}
ngOnChanges(changes: SimpleChanges) {
  console.log(changes);
  this.selectedLang = localStorage.getItem('PAE-LANG');
  this.changeLang();
}
}

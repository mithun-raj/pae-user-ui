import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from 'src/app/_services/common/common.service';
import { PageObject } from 'src/app/_shared/model/page-object';
import StructureArabic from '../../../assets/structure-menu-arabic.json';
import Structure from '../../../assets/structure-menu.json';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() selectedLang: any;
  pageObject: PageObject[] = Structure;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.selectedLang = localStorage.getItem('PAE-LANG');
    this.changeLang();
  }
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
}

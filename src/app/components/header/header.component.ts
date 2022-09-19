import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContentfulService } from 'src/app/_services/contentful/contentful.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() langChangeEmit = new EventEmitter();
  constructor(private contentfulService: ContentfulService) {}
  header: any;
  notification: any;
  asset: any;
  language: any = [
    { id: 'ar', name: 'ARABIC' },
    { id: 'en-US', name: 'ENGLISH' },
  ];
  ngOnInit(): void {
    localStorage.setItem('PAE-LANG', 'en-US');
    this.getContentList('en-US');
    // this.contentfulService
    //   .getContent('header', '3xGm4PQZCakrHmsbQBTonK')
    //   .then((data) => {
    //     this.notification = data;
    //     console.log(this.notification);
    //   });
  }

  setLang(lang: any) {
    localStorage.setItem('PAE-LANG', lang);
    // this.langChangeEmit.emit(lang);
    this.getContentList(lang);
  }
  getContentList(lang: any) {
    this.contentfulService
      .getContentList('header', { locale: lang })
      .then((data: any) => {
        console.log(data);

        this.header = data[0].fields;
        this.notification =
          this.header.notification.content[0].content[0].value;
        // this.language = this.header.language;
        this.asset = this.header.logo.fields.file.url;
        console.log(this.header);
      });
  }
}

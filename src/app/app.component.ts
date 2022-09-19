import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from './_services/contentful/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pae-user-ui';
  lesson$: Observable<any> | undefined;
  constructor(private contentfulSvc: ContentfulService) {}
  ngOnInit() {
    // this.contentfulSvc.logContent('header');
  }
}

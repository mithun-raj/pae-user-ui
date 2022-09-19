import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });
  logContent(contentId: any) {
    this.client
      .getEntries({ content_type: contentId })
      .then((entry) => console.log(entry));
  }

  getContentList(
    contentType: any,
    query?: object
  ): Promise<contentful.Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: contentType,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getContent(contentType: any, contentId: any): Promise<contentful.Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: contentType,
          },
          { 'sys.id': contentId }
        )
      )
      .then((res) => res.items[0]);
  }
  constructor() {}
}

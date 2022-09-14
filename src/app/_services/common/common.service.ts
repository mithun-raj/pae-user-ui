import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  appendString(str:any, pageObject: any) {
    const result =  pageObject.filter((s: { component: string; }) => s.component.toLowerCase() === str.toLowerCase());
    return result[0].content;
  }
  constructor() { }
}

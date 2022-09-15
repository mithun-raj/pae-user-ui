import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgIconService {
  /** All custom icons will go here to be registered. */
  public iconList = [
    'close',
    'close-white',
    'close_black',
    'close-icon-x',
  ];

  constructor(public iconRegistry: MatIconRegistry, public sanitizer: DomSanitizer) {
    /** Register all icons once to avoid re-registering the same icon multiple times */

    // Change for default icons path from here.
    const iconPath = '../../../../assets/icons/';
    this.iconList.forEach((icon: string) => {
      const iconWithPath = iconPath + icon + '.svg';
      this.iconRegistry.addSvgIcon(icon, this.sanitizer.bypassSecurityTrustResourceUrl(iconWithPath));
    });
  }

  /** Register new custom icons */
  public registerNewIcon(name: string, iconPathWithName: string) {
    this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(iconPathWithName));
  }
}

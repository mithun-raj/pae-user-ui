import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { SvgIconService } from './svg-icon.service';

@Component({
  selector: 'app-svg-icon',
  styleUrls: ['svg-icon.component.scss'],
  templateUrl: 'svg-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input() public iconId!: string;
  @Input() public name!: string;
  @Input() public color = 'inherit';
  @Input() public size = 'medium';
  @Input() public tooltip!: string;
  @Input() public clickable = false;
  @Input() public styleClass: any;

  @Output() public clickEmt = new EventEmitter();

  /**
   * Injecting the service here so that it will get instantiated on start
   * the service (singleton) will automatically register with the MatIconRegistry service
   * all icons, only once. In this way, the performance will be boosted since we are avoiding
   * re-registering an icon every time we use it.
   */

  constructor(private svgIconService: SvgIconService) {}

  public onClick(receivedEvent: any) {
    if (this.clickable) {
      this.clickEmt.emit({ name: this.name, event: receivedEvent, iconId: this.iconId });
    }
  }
}

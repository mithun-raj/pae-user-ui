import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, EventEmitter, HostListener, Inject, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditpopupComponent } from '../../editpopup/editpopup.component';

@Directive({
  selector: '[appCmsedit]'
})
export class CmseditDirective {
  @Input('propertyName') propertyName: any;
  @Input('propertyVal') propertyVal: any;
  @Input('appCmsedit') hoverClass:any;  
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();
  editButton: any;
  constructor(public elementRef:ElementRef, private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,public dialog: MatDialog) { 
      this.renderer.listen(elementRef.nativeElement, 'click', (event) => {
        this.openDialog();
      })
    }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
    // this.editButton = this.document.createElement('img');
    // this.editButton.src = '/assets/edit.png';
    // this.editButton.classList.add('hover-edit');
    // this.renderer.appendChild(this.elementRef.nativeElement, this.editButton);
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass.class);
    // this.renderer.removeChild(this.elementRef.nativeElement, this.editButton);
  }
  openDialog(): void {
    const payLoad = {
      className: this.hoverClass,
      propertyName: this.propertyName,
      propertyValue: this.propertyVal
    };
    const dialogRef = this.dialog.open(EditpopupComponent, {
      width: '350px',
      data: payLoad,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      if (result.status) {
        this.changeValue.emit(result);
      }
    });
  }
}

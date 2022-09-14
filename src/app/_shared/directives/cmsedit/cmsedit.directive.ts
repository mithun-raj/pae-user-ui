import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditpopupComponent } from '../../editpopup/editpopup.component';

@Directive({
  selector: '[appCmsedit]'
})
export class CmseditDirective {
editButton: any;
  constructor(public elementRef:ElementRef, private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,public dialog: MatDialog) { 
      this.renderer.listen(elementRef.nativeElement, 'click', (event) => {
        this.openDialog();
      })
    }
  @Input('appCmsedit') hoverClass:any;  

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
    // this.editButton = this.document.createElement('img');
    // this.editButton.src = '/assets/edit.png';
    // this.editButton.classList.add('hover-edit');
    // this.renderer.appendChild(this.elementRef.nativeElement, this.editButton);
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
    // this.renderer.removeChild(this.elementRef.nativeElement, this.editButton);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditpopupComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../components/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SvgIconComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SvgIconComponent
  ]
})
export class SharedModule { }

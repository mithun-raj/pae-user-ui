import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.component.html',
  styleUrls: ['./editpopup.component.css']
})
export class EditpopupComponent implements OnInit {

  public form!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditpopupComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private dialData: any) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      propertyTextBox: [this.dialData.propertyValue, [Validators.required, Validators.maxLength(500)]]
    });
  }
  closeDialogue() {
    this.dialogRef.close({});
  }
  onNoClick(): void {
    this.dialogRef.close({});
  }
  submitForm() {
    this.dialogRef.close({ status: true, value: this.form.value.propertyTextBox});
  }
}

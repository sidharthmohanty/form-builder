import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(
    public service: FormDataService,
    public dialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.service.insertElement(this.service.form.value);
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.onClose();
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}

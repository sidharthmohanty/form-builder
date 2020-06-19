import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
})
export class ModalEditComponent implements OnInit {
  public test;
  constructor(
    public service: FormDataService,
    public dialogRef: MatDialogRef<ModalEditComponent>
  ) {}

  ngOnInit(): void {
    this.test = this.service.getEditElement();
  }
  onSubmit(form: NgForm) {
    this.onClose();
  }
  onClose() {
    this.dialogRef.close();
  }
  addOptions() {
    this.test.options.push('');
    // this.lists.push({
    //   id: this.lists.length,
    //   name: this.lists[this.lists.length - 1].name + 'a',
    //   value: '',
    // });
  }
  UpdateOptions(index, event: any) {
    const options = this.test.options;
    options[index] = event.target.value;
  }
  removeOptions(index) {
    const options = this.test.options;
    options.splice(options[index], 1);
  }
}

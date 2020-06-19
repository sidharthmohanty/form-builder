import { Component, OnInit, Inject } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Forms } from '../formfield.interface';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  lists = [{ id: 1, name: 'a', value: '' }];
  public tests = [];
  public test;
  public type;
  public lebel;
  public options: [];
  constructor(
    public service: FormDataService,
    public dialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {
    this.tests = this.service.getElementList();
    this.test = this.service.getLastElement();
  }

  onSubmit(form: NgForm) {
    const label = form.value.label;
    const options = [];
    this.lists.forEach((list) => options.push(list.value));
    this.service.insertData(options, label);
    this.onClose();
  }
  onClose() {
    this.dialogRef.close();
  }
  addOptions() {
    this.lists.push({
      id: this.lists.length,
      name: this.lists[this.lists.length - 1].name + 'a',
      value: '',
    });
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  lists = [{ id: 1, name: 'a' }];
  public test = [];

  constructor(
    public service: FormDataService,
    public dialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    let opts = Object.values(form.value);
    this.service.insertOptions(opts);
    this.onClose();
  }
  onClose() {
    this.dialogRef.close();
  }
  addOptions() {
    this.lists.push({
      id: this.lists.length,
      name: this.lists[this.lists.length - 1].name + 'a',
    });
  }
}

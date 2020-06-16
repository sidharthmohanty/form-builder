import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormDataService } from '../form-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  public tests = [];

  constructor(public dialog: MatDialog, private service: FormDataService) {}
  ngOnInit(): void {
    this.tests = this.service.getElementList();
  }
  openDialog(test) {
    this.service.insertElement(test);
    this.dialog.open(ModalComponent, {
      width: '250px',
    });
  }

  addElement(test) {
    this.service.insertElement(test);
  }

  deleteElement(index) {
    this.tests.splice(index, 1);
  }

  onFormSubmit(formData: NgForm) {
    console.log(formData.value);
  }
}

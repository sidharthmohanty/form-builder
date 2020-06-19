import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormDataService } from '../form-data.service';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  public tests;

  constructor(public dialog: MatDialog, private service: FormDataService) {}
  ngOnInit(): void {
    this.service.getData().subscribe(
      (data) => {
        this.tests = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openDialog(test) {
    this.service.insertElement(test);
    this.dialog.open(ModalComponent, {
      width: '250px',
    });
  }
  editFields(index) {
    this.service.readyElement(index);
    this.dialog.open(ModalEditComponent, {
      width: '250px',
    });
  }

  deleteElement(index) {
    this.tests.splice(index, 1);
  }

  onFormSubmit() {
    console.log(JSON.stringify(this.tests));
  }
  clearForm() {
    this.service.clearAll();
  }
}

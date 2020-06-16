import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  public tests = [
    {
      type: 'input',
      label: 'First Name',
      input_type: 'text',
      name: 'first_name',
      width: '100',
      options: [],
      row: 0,
    },
  ];
  public test: [];

  public inputTypes = 1;

  constructor(public dialog: MatDialog, private service: FormDataService) {}
  ngOnInit(): void {
    this.tests = this.service.getElementList();
  }
  openDialog(test) {
    this.service.initializeFormGroup();

    this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        type: test.type,
        label: test.label,
        input_type: test.input_type,
        name: test.name,
        width: test.width,
        options: test.options,
        row: test.row,
      },
    });
  }

  deleteElement(index) {
    this.tests.splice(index, 1);
  }
}

import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
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
  constructor() {}
  form: FormGroup = new FormGroup({
    label: new FormControl([0]),
    type: new FormControl([0]),
    input: new FormControl([0]),
    name: new FormControl([0]),
    width: new FormControl([0]),
    options: new FormControl([0]),
    row: new FormControl([0]),
  });

  initializeFormGroup() {
    this.form.patchValue({
      label: '',
      type: '',
      input: '',
      name: '',
      width: '',
      options: [],
      row: [],
    });
  }
  insertElement(ele) {
    this.tests.push(ele);
  }
  removeElement(index) {
    this.tests.splice(index, 1);
  }

  getElementList() {
    return this.tests;
  }
}

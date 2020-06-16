import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  // public tests = [
  //   {
  //     type: 'input',
  //     label: 'First Name',
  //     input_type: 'text',
  //     name: 'first_name',
  //     width: '100',
  //     options: [],
  //     row: 0,
  //   },
  // ];
  public tests = [];
  constructor() {}
  insertElement(ele) {
    this.tests.push(ele);
  }
  removeElement(index) {
    this.tests.splice(index, 1);
  }

  insertOptions(opts) {
    let index = this.tests.length - 1;
    let test = this.tests[index];
    opts.forEach((op) => {
      test.options.push(op);
    });
    this.removeElement(index);
    this.insertElement(test);
  }

  getElementList() {
    return this.tests;
  }
}

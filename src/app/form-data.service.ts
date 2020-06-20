import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public test;
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('http://localhost:8000/api/form');
    // this.tests.push(data);
    // return this.tests;
  }
  insertElement(ele) {
    this.tests.push(ele);
  }
  removeElement(index) {
    this.tests.splice(index, 1);
  }

  insertData(options, label) {
    const index = this.tests.length - 1;
    this.tests[index].options = options.slice();
    this.tests[index].label = label;
  }

  getElementList() {
    return this.tests;
  }
  getLastElement() {
    return this.tests[this.tests.length - 1];
  }
  clearAll() {
    const length = this.tests.length;
    this.tests.splice(0, length);
  }

  readyElement(index) {
    this.test = this.tests[index];
  }

  getEditElement() {
    return this.test;
  }
  updateDirection(dire) {
    const data = {
      dire,
    };
    return this.http.put('http://localhost:8000/api/form/direction', data);
  }
}

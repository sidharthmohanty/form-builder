import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  constructor() {}
  addElement(element) {
    this.tests.push(element);
  }
  ngOnInit(): void {}
}

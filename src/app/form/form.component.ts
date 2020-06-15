import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public test = [
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
  ngOnInit(): void {}
}

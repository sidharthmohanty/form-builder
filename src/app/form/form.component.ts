import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormDataService } from '../form-data.service';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  public tests;
  @ViewChild('r') r: ElementRef;

  constructor(public dialog: MatDialog, private service: FormDataService) {}
  ngOnInit(): void {
    this.service.getData().subscribe(
      (data) => {
        this.tests = data;
        console.log(typeof this.tests);
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
    const dire = this.tests.map((test) => test.item_id).join(',');
    console.log(dire);

    this.service.updateDirection(dire).subscribe(() => {
      console.log('updated');
    });
  }
  clearForm() {
    this.service.clearAll();
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tests, event.previousIndex, event.currentIndex);
  }
}

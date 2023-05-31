import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'mjx-detailed-stock',
  templateUrl: './detailed-stock.component.html',
  styleUrls: ['./detailed-stock.component.scss']
})
export class DetailedStockComponent {
  formGroup: FormGroup;

  constructor(public fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      amount: [null, Validators.required],
      value: [null, Validators.required],
    })
  }
}

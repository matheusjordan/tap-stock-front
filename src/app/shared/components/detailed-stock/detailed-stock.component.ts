import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../../../app.service";
import {finalize, tap} from "rxjs";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StockModel} from "../../models/stock-model";

@Component({
  selector: 'mjx-detailed-stock',
  templateUrl: './detailed-stock.component.html',
  styleUrls: ['./detailed-stock.component.scss']
})
export class DetailedStockComponent {
  formGroup: FormGroup;
  isLoading: boolean;
  isEdit: boolean;

  constructor(
    private fb: FormBuilder,
    private service: AppService,
    private matDialog: MatDialogRef<DetailedStockComponent>,
    @Inject(MAT_DIALOG_DATA) data: StockModel
  ) {
    this.buildForm();
    if (data) {
      this.isEdit = true;
      this.formGroup.patchValue(data);
    }
  }

  saveStock() {
    if (this.isEdit) {
      this.editStock();
    } else {
      this.createStock();
    }
  }

  private createStock() {
    this.isLoading = true;
    this.service
      .createStock(this.formGroup.value)
      .pipe(
        tap((res) => {
          this.matDialog.close(res);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe();
  }

  private editStock() {
    this.service
      .updateStock(this.formGroup.value.id, this.formGroup.value)
      .pipe(
        tap((res) => {
          this.matDialog.close(res);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe();
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

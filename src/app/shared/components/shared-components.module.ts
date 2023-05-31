import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchStockComponent} from "./search-stock/search-stock.component";
import {SharedMaterialModule} from "../shared-material.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SearchStockComponent
  ],
  exports: [
    SearchStockComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,

    ReactiveFormsModule
  ]
})
export class SharedComponentsModule { }

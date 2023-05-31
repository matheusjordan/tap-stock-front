import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchStockComponent} from "./search-stock/search-stock.component";
import {SharedMaterialModule} from "../shared-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {DetailedStockComponent} from "./detailed-stock/detailed-stock.component";
import {ListStockComponent} from "./list-stock/list-stock.component";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "../../app.service";

@NgModule({
  declarations: [
    SearchStockComponent,
    DetailedStockComponent,
    ListStockComponent
  ],
  exports: [
    SearchStockComponent,
    DetailedStockComponent,
    ListStockComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedMaterialModule,

    ReactiveFormsModule
  ],
  providers: [AppService]
})
export class SharedComponentsModule { }

import { Routes } from '@angular/router';
import {DetailedStockComponent} from "./shared/components/detailed-stock/detailed-stock.component";
import {ListStockComponent} from "./shared/components/list-stock/list-stock.component";

export const routes: Routes = [
  { path: '', component: ListStockComponent },
  { path: 'new', component: DetailedStockComponent },
  { path: 'edit', component: DetailedStockComponent },
];

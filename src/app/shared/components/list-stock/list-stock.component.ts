import { Component } from '@angular/core';
import {StockModel} from "../../models/stock-model";

const ELEMENT_DATA: StockModel[] = [
  { id: '1', name: 'Coca-Cola', amount: 5, value: 8 },
  { id: '2', name: 'Guaraná', amount: 3, value: 7 },
  { id: '3', name: 'Fanta', amount: 7, value: 7 },
  { id: '4', name: 'Soda', amount: 5, value: 6 },
  { id: '5', name: 'Fanta Uva', amount: 3, value: 7 }
];

@Component({
  selector: 'mjx-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.scss']
})
export class ListStockComponent {
  displayedColumns: string[] = ['id', 'name', 'amount', 'value', 'total'];
  dataSource = ELEMENT_DATA;
}

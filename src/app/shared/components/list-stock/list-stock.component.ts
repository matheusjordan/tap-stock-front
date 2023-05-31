import {Component, EventEmitter, Output} from '@angular/core';
import {StockModel} from "../../models/stock-model";
import {AppService} from "../../../app.service";
import {finalize, tap} from "rxjs";

@Component({
  selector: 'mjx-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.scss']
})
export class ListStockComponent {
  displayedColumns: string[] = ['id', 'name', 'amount', 'value', 'total', 'actions'];
  dataSource: StockModel[] = [];

  @Output('delete') deleteEvent = new EventEmitter();
  @Output('edit') editEvent = new EventEmitter();

  loadingStocks: boolean;

  constructor(private service: AppService) {
    this.getStocks();
  }

  getStocks() {
    this.loadingStocks = true;
    this.service.getStocks()
      .pipe(
        tap(res => {
          this.dataSource = res;
        }),
        finalize(() => {
          this.loadingStocks = false;
        })
      ).subscribe();
  }
}

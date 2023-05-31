import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl} from "@angular/forms";
import {finalize, map, Observable, startWith, tap} from "rxjs";
import {StockModel} from "../../models/stock-model";
import {AppService} from "../../../app.service";

@Component({
  selector: 'mjx-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.scss']
})
export class SearchStockComponent {
  searchControl = new FormControl(null);
  options: StockModel[] = [];
  filteredOptions: Observable<StockModel[]>;
  isLoading: boolean;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.getStocks();
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private getStocks() {
    this.isLoading = true;
    this.service.getStocks()
      .pipe(
        tap((res) => {
          this.options = res;
        }),
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe()
  }

  private _filter(value: string): StockModel[] {
    const filterValue = value.toLowerCase();

    return this.options
      .filter(option => option.name.toLowerCase().includes(filterValue));
  }
}

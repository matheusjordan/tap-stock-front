import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {StockModel} from "../../models/stock-model";

@Component({
  selector: 'mjx-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.scss']
})
export class SearchStockComponent {
  searchControl = new FormControl(null);
  options: StockModel[] = [
    { id: '1', name: 'Coca-Cola', amount: 5, value: 8 },
    { id: '2', name: 'Guaraná', amount: 3, value: 7 },
    { id: '3', name: 'Fanta', amount: 7, value: 7 },
    { id: '4', name: 'Soda', amount: 5, value: 6 },
    { id: '5', name: 'Fanta Uva', amount: 3, value: 7 },
  ];
  filteredOptions: Observable<StockModel[]>;

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): StockModel[] {
    const filterValue = value.toLowerCase();

    return this.options
      .filter(option => option.name.toLowerCase().includes(filterValue));
  }
}

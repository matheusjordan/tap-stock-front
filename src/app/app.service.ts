import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StockModel} from "./shared/models/stock-model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'http://localhost:3000/stocks';

  constructor(private http: HttpClient) { }

  getStocks(): Observable<StockModel[]> {
    return this.http.get<StockModel[]>(this.url);
  }

  getStock(id: string): Observable<StockModel> {
    return this.http.get<StockModel>(`${this.url}/${id}`);
  }

  createStock(stock: StockModel): Observable<StockModel> {
    return this.http.post<StockModel>(this.url, stock);
  }

  updateStock(id: string, stock: StockModel): Observable<StockModel> {
    return this.http.put<StockModel>(`${this.url}/${id}`, stock);
  }

  deleteStock(id: string): Observable<StockModel> {
    return this.http.delete<StockModel>(`${this.url}/${id}`);
  }
}


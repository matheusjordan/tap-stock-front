import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SharedMaterialModule} from "./shared/shared-material.module";
import {SharedComponentsModule} from "./shared/components/shared-components.module";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DetailedStockComponent} from "./shared/components/detailed-stock/detailed-stock.component";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
import {ListStockComponent} from "./shared/components/list-stock/list-stock.component";
import {finalize, switchMap, tap} from "rxjs";
import {StockModel} from "./shared/models/stock-model";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Component({
  selector: 'mjx-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedMaterialModule, SharedComponentsModule, HttpClientModule],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Estoque App';

  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private service: AppService
  ) {}

  ngAfterViewInit() {
    this.outlet.activateEvents.subscribe(res => {
      this.listenDelete();
      this.listenEdit();
    })
  }

  updateTable() {
    const list = this.outlet.component as ListStockComponent;
    list.getStocks();
  }

  openDialog(data?: StockModel) {
    const dialogRef = this.dialog.open(DetailedStockComponent, {
      width: '500px',
      height: 'auto',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (data) {
          this.snack.open('Editado com sucesso!', null, this.dialogConfig);
        } else {
          this.snack.open('Salvo com sucesso!', null, this.dialogConfig);
        }
      }
      this.updateTable();
    });
  }

  private listenDelete() {
    const list = this.outlet.component as ListStockComponent;
    let stock: StockModel;
    list.deleteEvent
      .pipe(
        tap(res => {
          stock = res;
        }),
        switchMap(() => this.service.deleteStock(stock.id)),
        tap(() => {
          this.snack.open('Deletado com sucesso!', null, this.dialogConfig);
        }),
        finalize(() => {
          this.updateTable();
        })
      ).subscribe()
  }

  private listenEdit() {
    const list = this.outlet.component as ListStockComponent;
    list.editEvent
      .pipe(
        tap(res => {
          this.openDialog(res);
        })
      ).subscribe()
  }

  private get dialogConfig(): MatSnackBarConfig {
    return {
      duration: 1300
    }
  }
}

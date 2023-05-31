import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SharedMaterialModule} from "./shared/shared-material.module";
import {SharedComponentsModule} from "./shared/components/shared-components.module";
import {MatDialog} from "@angular/material/dialog";
import {DetailedStockComponent} from "./shared/components/detailed-stock/detailed-stock.component";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";

@Component({
  selector: 'mjx-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedMaterialModule, SharedComponentsModule, HttpClientModule],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Estoque App';

  constructor(
    public dialog: MatDialog
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DetailedStockComponent, {
      width: '500px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

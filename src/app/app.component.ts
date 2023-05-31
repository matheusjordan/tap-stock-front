import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SharedMaterialModule} from "./shared/shared-material.module";


@Component({
  selector: 'mjx-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedMaterialModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock';
}

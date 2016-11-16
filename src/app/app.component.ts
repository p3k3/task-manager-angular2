import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mainSidenav') mainSidenav: MdSidenav;

  closeMenu(close: boolean): void {
    if (close) {
      this.mainSidenav.close();
    }
  }
}

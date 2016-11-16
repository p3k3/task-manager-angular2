import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() onClick = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  click(state: string) {
    if (state) {
      this.router.navigate(['/tasks/' + state]);
    } else {
      this.router.navigate(['/tasks']);
    }

    this.onClick.emit(true);
  }
}

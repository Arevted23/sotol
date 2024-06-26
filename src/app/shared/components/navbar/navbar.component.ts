import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public active: boolean = false
  setActive(): void {
    this.active = !this.active
  }
}

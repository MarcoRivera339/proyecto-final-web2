import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartBadgeComponent } from '../cart-badge/cart-badge.component';
import { DarkToggleComponent } from '../dark-toggle/dark-toggle.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CartBadgeComponent, DarkToggleComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  abierto = false;

  constructor(public auth: AuthService, private router: Router) {}

  get loggedIn() {
    return this.auth.isLoggedIn();
  }

  toggleMenu() {
    this.abierto = !this.abierto;
  }

  closeMenu() {
    this.abierto = false;
  }

  logout() {
    this.auth.logout();
    this.closeMenu();
    this.router.navigateByUrl('/login');
  }
}

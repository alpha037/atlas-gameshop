import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent implements OnInit {
  public isMenuCollapsed: boolean = true;
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe((appUser) => (this.appUser = appUser));

    this.cart$ = await this.shoppingCartService.getCart();
    // .snapshotChanges()
    // .pipe(
    //   map(
    //     (cart) =>
    //       <ShoppingCart>{
    //         items: cart.payload.val()['items'],
    //       }
    //   )
    // );
  }

  logout() {
    this.isMenuCollapsed = true;
    this.auth.logout();
  }
}

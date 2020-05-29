import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
// import { MatDialog } from '@angular/material/dialog';
import { MatFilterListComponent } from 'src/app/shopping/components/mat-filter-list/mat-filter-list.component';
import { DialogWarningComponent } from '../dialog-warning/dialog-warning.component';

@Component({
  selector: 'mat-nav',
  templateUrl: './mat-nav.component.html',
  styleUrls: ['./mat-nav.component.css'],
})
export class MatNavComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  toggleDark: boolean = false;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService,
    private _bottomSheet: MatBottomSheet
  ) // private dialog: MatDialog
  {}

  async ngOnInit() {
    this.auth.appUser$.subscribe((appUser) => (this.appUser = appUser));

    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(MatFilterListComponent);
  }

  openDialog() {
    this.toggleDark = !this.toggleDark;

    // if (this.toggleDark)
    //   this.dialog.open(DialogWarningComponent, {
    //     width: '400px',
    //   });
  }
}

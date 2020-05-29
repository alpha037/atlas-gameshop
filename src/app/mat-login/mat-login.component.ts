import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-mat-login',
  templateUrl: './mat-login.component.html',
  styleUrls: ['./mat-login.component.css'],
})
export class MatLoginComponent {
  constructor(private auth: AuthService) {}

  login() {
    this.auth.login();
  }
}

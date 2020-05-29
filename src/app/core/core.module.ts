import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MatNavComponent } from './components/mat-nav/mat-nav.component';
import { DialogWarningComponent } from './components/dialog-warning/dialog-warning.component';

@NgModule({
  declarations: [BsNavbarComponent, HomeComponent, MatNavComponent, DialogWarningComponent],
  imports: [SharedModule, RouterModule.forChild([])],
  exports: [BsNavbarComponent, MatNavComponent],
  providers: [],
})
export class CoreModule {}

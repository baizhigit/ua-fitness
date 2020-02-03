import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from './auth/auth.module';

// containers
import { AppComponent } from './app.component';

// components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

// routes
export const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}

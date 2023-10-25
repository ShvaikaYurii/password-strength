import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { BoxItemComponent } from './components/box-item/box-item.component';
import { StrenthBoxComponent } from './components/strenth-box/strenth-box.component';

@NgModule({
  declarations: [AppComponent, PasswordInputComponent, BoxItemComponent, StrenthBoxComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

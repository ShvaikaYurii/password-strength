import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'password-strenth';
  private noCyrillicRegExp = /^[^\u0401\u0451\u0410-\u044f]*$/;

  formGoup: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.noCyrillicRegExp),
      Validators.minLength(8),
    ]),
  });
}

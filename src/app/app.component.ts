import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password-strenth';

  passwordStrenthLevel = 0;
  passwordVisibility = false;
  inputType = 'password';

  value = '';

  getPasswordLevel(password: string): number {
    const symbols = /[\W]+/g.test(password);
    const letters = /[a-zA-Z]+/.test(password);
    const numbers = /[0-9]+/.test(password);

    const matches = [letters, numbers, symbols];

    let passedMatches = 1;

    for (const match of matches) {
      passedMatches += match === true ? 1 : 0;
    }

    return passedMatches;
  }

  changePassword() {
    const cyrillic = /[\u0401\u0451\u0410-\u044f]/.test(this.value);

    if (this.value.length == 0) {
      this.passwordStrenthLevel = 0;
      return;
    } else if (this.value.length < 8) {
      this.passwordStrenthLevel = 1;
      return;
    } else if (cyrillic) {
      this.passwordStrenthLevel = -1;
      return;
    }

    this.passwordStrenthLevel = this.getPasswordLevel(this.value);
  }

  passwordVisibilityHandler() {
    this.passwordVisibility = !this.passwordVisibility;
    this.inputType = this.passwordVisibility ? 'text' : 'password';
  }
}

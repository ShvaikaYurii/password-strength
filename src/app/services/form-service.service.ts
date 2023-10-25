import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  constructor() {}

  public passwordLevel = 0;

  public checkPassword(password: string): void {
    const symbols = /[\W]+/g.test(password);
    const letters = /[a-zA-Z]+/.test(password);
    const numbers = /[0-9]+/.test(password);

    const matches = [letters, numbers, symbols];

    let passedMatches = 0;

    for (const match of matches) {
      passedMatches += match === true ? 1 : 0;
    }

    this.passwordLevel = passedMatches;
  }
}

import { Component, Input } from '@angular/core';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-strenth-box',
  templateUrl: './strenth-box.component.html',
  styleUrls: ['./strenth-box.component.css'],
})
export class StrenthBoxComponent {
  @Input() isValid: boolean = false;
  @Input() passwordLevel: number = 0;

  public passwordStrenthLabels: { [key: number]: string } = {
    1: 'Too weak',
    2: 'Coud be stronger',
    3: 'Strong password',
  };
}

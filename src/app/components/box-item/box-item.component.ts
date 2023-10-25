import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxItemComponent {
  @Input() passwordLevel: number = 0;
  @Input() first: boolean = false;
  @Input() last: boolean = false;
  @Input() isValid: boolean = false;
}

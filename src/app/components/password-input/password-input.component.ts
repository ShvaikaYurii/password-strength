import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    FormService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() errors?: ValidationErrors | null = [];
  @Input() invalidAndDirty: boolean = false;

  public errorsMessages: { [key: string]: string } = {
    required: 'The field is required',
    minlength: 'Must be at least 8 characters long',
    pattern: 'The password contains Cyrillic characters',
  };

  public value: string = '';

  public passwordVisibility = false;
  public inputType = 'password';

  private OnChange!: (value: string) => void;
  private OnTouched!: () => void;

  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    public formService: FormService
  ) {}

  public passwordVisibilityHandler(): void {
    this.passwordVisibility = !this.passwordVisibility;
    this.inputType = this.passwordVisibility ? 'text' : 'password';
  }

  public onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;

    this.formService.checkPassword(inputValue);

    this.OnChange(inputValue);
  }

  public writeValue(obj: any): void {
    this.value = this.value;

    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: any): void {
    this.OnChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }
}

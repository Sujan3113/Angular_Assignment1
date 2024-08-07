import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultDisplayComponent } from '../result-display/result-display.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule,ResultDisplayComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  addNumbers() {
    this.result = this.number1 + this.number2;
  }
}

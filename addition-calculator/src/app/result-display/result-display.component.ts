import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrl: './result-display.component.css',
  standalone: true,
  imports: [DecimalPipe]
})
export class ResultDisplayComponent {
  @Input() result: number = 0;
}

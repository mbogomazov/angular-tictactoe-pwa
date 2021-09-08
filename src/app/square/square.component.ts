import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <button nbButton *ngIf="!value">{{ value }}</button>
   <button nbButton hero status="success" *ngIf="value === 'X'">{{ value }}</button>
   <button nbButton hero status="info" *ngIf="value === 'O'">{{ value }}</button>
  `,
  styles: [
    `button {
      height: 200px;
      width: 100%;
      border: 1px solid gray;
    }`
  ]
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}

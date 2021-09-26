import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <button nbButton *ngIf="!playerSign">{{ playerSign }}</button>
   <button nbButton hero status="success" *ngIf="playerSign === 'X'">{{ playerSign }}</button>
   <button nbButton hero status="info" *ngIf="playerSign === 'O'">{{ playerSign }}</button>
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
  @Input() playerSign!: 'X' | 'O' | null;
}

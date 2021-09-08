import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <button>{{ value }}</button>
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

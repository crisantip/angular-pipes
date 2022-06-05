import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'christian';
  nombreUpper: string = 'CHRISTIAN';
  nombreCompleto: string = 'ChRiStIaN iNaPaNtA';

  fecha: Date = new Date(); // el día de hoy

}

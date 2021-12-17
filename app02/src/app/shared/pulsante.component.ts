import { Component } from '@angular/core';

@Component({
  selector: 'pulsante',
  template: '<button>{{label}}</button>',
})
export class PulsanteComponent {
  //atttributi
  label: string = 'Invia!';
}

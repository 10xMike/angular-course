import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css'],
})
export class ElencoComponent implements OnInit {
  display: string = 'Fai qualcosa sopra al quadrato';

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.display = 'Hai cliccato sul quadrato';
  }
  onMouseOver() {
    this.display = 'Sei entrato';
  }
  onMouseOut() {
    this.display = 'Sei uscito';
  }
  onFocus() {
    this.display = 'Focus';
  }
  onBlur() {
    this.display = 'Blur';
  }
  onInput(event: Event) {
    let elemento: HTMLInputElement = event.target as HTMLInputElement;
    this.display = 'Input effettuato, nuovo valore' + elemento.value;

    elemento.style.backgroundColor = 'cyan';
    elemento.style.color = "blue";
  }
}

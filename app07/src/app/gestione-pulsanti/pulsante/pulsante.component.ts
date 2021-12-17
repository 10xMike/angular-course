import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  @Input() testo: string;
  @Output() pulsanteCliccato: EventEmitter<string>;

  constructor() {
    this.testo = 'testo pulsante';
    this.pulsanteCliccato = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  onClick(): void {
    // emettere l'evento affinché si possa rilevare
    this.pulsanteCliccato.emit(this.testo);
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css'],
})
export class EsempioComponent implements OnInit {
  display: string = 'Clicca sul pulsante';
  contatore: number = 0;
  disabilitato: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    //console.log('Hai cliccato sul pulsante');
    this.contatore++;
    this.display = 'Hai cliccato sul pulsante ' + this.contatore + ' volte';
  }

  onReset() {
    this.contatore = 0;
    this.display = 'Contatore resettato';
  }

  cambiaStato() {
    this.disabilitato = !this.disabilitato;
  }
}

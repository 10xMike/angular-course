import { Component, OnInit } from '@angular/core';
import { DatiUtente } from '../models/dati-utente';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent implements OnInit {
  datiModel: DatiUtente;
  dati: DatiUtente;

  constructor() {
    this.datiModel = {
      nome: 'pippo',
      cognome: 'pluto',
      intviaggi: false,
      intmusica: false,
      intcibo: false,
      laurea: 'no',
      esperienza: 'junior',
      commenti: '',
    };

    this.dati = Object.assign({}, this.datiModel);
    this.dati = { ...this.datiModel };
  }

  ngOnInit(): void {}
}

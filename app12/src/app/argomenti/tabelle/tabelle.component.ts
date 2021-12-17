import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelle',
  templateUrl: './tabelle.component.html',
  styleUrls: ['./tabelle.component.css'],
})
export class TabelleComponent implements OnInit {
  persone = [
    {
      id: 1,
      nome: 'Mario',
      cognome: 'Rossi',
    },
    {
      id: 2,
      nome: 'Alex',
      cognome: 'Bianchi',
    },
    {
      id: 3,
      nome: 'Luca',
      cognome: 'Verdi',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

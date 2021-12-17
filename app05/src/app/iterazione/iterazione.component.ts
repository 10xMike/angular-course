import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterazione',
  templateUrl: './iterazione.component.html',
  styleUrls: ['./iterazione.component.css'],
})
export class IterazioneComponent implements OnInit {
  colori: string[] = ['giallo', 'azzurro', 'rosso', 'verde'];

  persone = [
    {
      nome: 'Lisa',
      cognome: 'Rossi',
    },
    {
      nome: 'Silvia',
      cognome: 'Verdi',
    },
    {
      nome: 'Manuela',
      cognome: 'Bianchi',
    },
    {
      nome: 'Michelle',
      cognome: 'Neri',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

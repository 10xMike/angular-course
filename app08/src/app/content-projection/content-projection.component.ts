import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
})
export class ContentProjectionComponent implements OnInit {
  elenco: string[];
  prodotti: any[];
  constructor() {
    this.elenco = ['aggiungi', 'rimuovi', 'chiudi', 'apri'];
    this.prodotti = [
      {
        nome: 'pianta',
        descrizione: 'pianta carnivora',
        prezzo: 35,
      },
      { nome: 'fungo', descrizione: 'fungo porcino', prezzo: 2 },
    ];
  }

  ngOnInit(): void {}
}

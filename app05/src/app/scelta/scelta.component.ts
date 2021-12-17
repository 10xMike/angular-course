import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scelta',
  templateUrl: './scelta.component.html',
  styleUrls: ['./scelta.component.css'],
})
export class SceltaComponent implements OnInit {
  visibile: boolean = true;
  nascosto: boolean = false;
  numero: number = 6;
  mostraComp: boolean = true;
  colore: string = "giallo";

  /* persona: any = null; */
  persona = {
    nome: 'Domenica',
    cognome: 'Rossi',
    anni: 44,
  };

  constructor() {}

  ngOnInit(): void {}
}

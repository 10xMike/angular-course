import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempi-pipes',
  templateUrl: './esempi-pipes.component.html',
  styleUrls: ['./esempi-pipes.component.css'],
})
export class EsempiPipesComponent implements OnInit {
  numero: number = 123.456;
  nome: string = 'Alberto';
  mese: string = 'aprile';
  iva: number = 0.22;
  oggi: Date = new Date();
  prezzo: number = 1234.5678;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {
  prezzo: number;
  nome: string;
  constructor() {
    this.nome = 'margherita';
    this.prezzo = 6.5;
  }

  ngOnInit(): void {}

  vediDati(): void {
    alert('Pizza: ' + this.nome + ' Prezzo: ' + this.prezzo);
  }
}

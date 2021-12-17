import { Component } from '@angular/core';

@Component({
  selector: 'prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css'],
})
export class ProdottoComponent {
  codice: string = 'C034';
  nome: string = 'PS5';
  immagine: string = 'assets/img/ps5.jpg';
  prezzo: number = 789.99;
  testoImmagine: string = 'Playstation 5';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.css'],
})
export class DirettiveComponent implements OnInit {
  stileUno: string = 'color:red; font-size: 1.5rem;';
  coloreUno: string = 'purple';
  nomi: string[];
  stileDue = {
    color: 'red',
    'font-size': '2em',
  };
  classeUno: string = 'evidenziato';
  classeDue: string[] = ['evidenziato', 'sottolineato'];
  oggettoClassi = {evidenziato: false}
  constructor() {
    this.nomi = [
      'Marco',
      'Luca',
      'Giovanni',
      'Aldo',
      'Alberta',
      'Ugo',
      'Tania',
    ];
  }

  ngOnInit(): void {}

  getStyle(n: string): any {
    if (n.length > 6) {
      return {
        color: 'blue',
      };
    }
    return {}; // oggetto vuoto = nessun oggetto
  }
  getClasses(): object {
    /*     if (n.length < 6) {
      return {
        evidenziato: true,
        sottolineato: true,}}
*/
    return {
      evidenziato: true,
      sottolineato: true,
    };
  }
    evidenzia():void{
    this.oggettoClassi.evidenziato = !this.oggettoClassi.evidenziato;
  } /*
  sottolinea():void{
    this.oggettoClassi.sottolineato = !this.oggettoClassi.sottolineato;
  } */
}

import { Component, OnInit } from '@angular/core';
import { Orologio } from './orologio';

@Component({
  selector: 'app-gestione-orologi',
  templateUrl: './gestione-orologi.component.html',
  styleUrls: ['./gestione-orologi.component.css'],
})
export class GestioneOrologiComponent implements OnInit {
  //elenco orologi
  elencoOrologi: Orologio[];

  constructor() {
    this.elencoOrologi = [new Orologio(10, 35), new Orologio(11, 30)];
  }

  ngOnInit(): void {}

  aumenta(orologio: Orologio):void{
    // aumenta i minuti di 5
    if(orologio.minuti == 55){
      orologio.minuti = 0;
      if(orologio.ore == 23){
        orologio.ore = 0;
      } else {
        orologio.ore++;
      }
    } else {
      orologio.minuti += 5;
    }
  }
}

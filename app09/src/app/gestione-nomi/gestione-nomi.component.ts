import { Component, OnInit } from '@angular/core';
import { NomeService } from './nome.service';

@Component({
  selector: 'app-gestione-nomi',
  templateUrl: './gestione-nomi.component.html',
  styleUrls: ['./gestione-nomi.component.css'],
})
export class GestioneNomiComponent implements OnInit {
  nomi: string[];

  //inietto il servizio nel costruttore
  constructor(private ns: NomeService) {
    this.nomi = [];
  }

  //life cycle hooks
  ngOnInit(): void {
    this.nomi = this.ns.getNomi();
  }
  inserisci(nome: any): void {
    // chiedere al servizio di aggiungere il nome
    this.ns.addNome(nome.value);

    //pulire la casella del nome
    nome.value = '';
  }
}

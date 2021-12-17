import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-elenco-atleti',
  templateUrl: './elenco-atleti.component.html',
  styleUrls: ['./elenco-atleti.component.css']
})
export class ElencoAtletiComponent implements OnInit {
  elencoAtleti: Atleta[];
  constructor(private as:AtletaService) {
    this.elencoAtleti = [];
   }

  ngOnInit(): void {
    //recupero elenco atleti del servizio
    this.elencoAtleti = this.as.getAtleti();
  }

}

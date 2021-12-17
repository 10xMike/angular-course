import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  persona = {
    nome: 'Mario',
    cognome: 'Rossi',
    anni: '18',
  };
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mio-componente',
  templateUrl: './mio-componente.component.html',
  styleUrls: ['./mio-componente.component.css'],
})
export class MioComponenteComponent implements OnInit {
  nome?: string = 'Mike';
  prezzo: number = 1200;
  numeroPezzi: number = 5;
  cognome: string = 'Rossi';
  oggi: Date = new Date();
  link: string = 'https://www.google.it'; // URL web link
  immagine: string = 'assets/img/ps5.jpg'; // percorso immagine

  constructor() {}

  ngOnInit(): void {}
}

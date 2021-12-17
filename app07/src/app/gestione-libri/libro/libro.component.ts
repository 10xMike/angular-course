import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  @Input('datiLibro') libro: Libro; // uso di alias per non usare sempre 'libro'
  @Output() selezionato: EventEmitter<Libro>;
  constructor() {
    this.libro = new Libro(0, 'Titolo prova', 'autore prova', 1900);
    this.selezionato = new EventEmitter<Libro>();
  }
  ngOnInit(): void {}

  onClick(): void {
    // dobbiamo inviare all'esterno il libro selezionato
    this.selezionato.emit(this.libro);
  }
}

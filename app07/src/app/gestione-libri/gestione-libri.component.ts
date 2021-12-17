import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-gestione-libri',
  templateUrl: './gestione-libri.component.html',
  styleUrls: ['./gestione-libri.component.css'],
})
export class GestioneLibriComponent implements OnInit {
  libri: Libro[];
  libroSelezionato?: Libro;

  constructor() {
    this.libri = [
      new Libro(1, 'Manuale di Angular', 'Michele Catena', 2021),
      new Libro(2, 'Manuale di TypeScript', 'Fabio Pacifici', 2021),
      new Libro(3, 'Manuale di JavaScript', 'Margherita Ghidini', 2021),
    ];
  }

  ngOnInit(): void {}

  recuperaSelezione(libro: Libro): void {
    this.libroSelezionato = libro;
  }
}

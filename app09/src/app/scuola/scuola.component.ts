import { Component, OnInit } from '@angular/core';
import { Studente } from '../models/studente';
import { StudenteService } from '../services/studente.service';

@Component({
  selector: 'app-scuola',
  templateUrl: './scuola.component.html',
  styleUrls: ['./scuola.component.css'],
})
export class ScuolaComponent implements OnInit {
  studenti: Studente[];
  orderMediaAsc: boolean;
  orderMatricolaAsc: boolean;
  ls: any;
  orderCognomeAsc;

  constructor(private ss: StudenteService) {
    this.studenti = [];
    this.orderMediaAsc = true;
    this.orderMatricolaAsc = true;
    this.orderCognomeAsc = true;
  }

  ngOnInit(): void {
    //recupero elenco studenti da servizio
    this.studenti = this.ss.getStudenti();
  }

  sortStudentiByMedia(): void {
    this.ls.log('Scuola: studenti ordinati per ordine');
    if (this.orderMediaAsc) {
      this.studenti.sort((a, b) => a.media - b.media);
    } else {
      this.studenti.sort((a, b) => b.media - a.media);
    }
    this.orderMediaAsc = !this.orderMediaAsc;
  }

  sortMatricola(): void {
    if (this.orderMatricolaAsc) {
      this.studenti.sort((a, b) => a.matricola - b.matricola);
    } else {
      this.studenti.sort((a, b) => b.matricola - a.matricola);
    }
    this.orderMatricolaAsc = !this.orderMatricolaAsc;
  }

  sortStudentiByCognome(): void {
    if (this.orderCognomeAsc) {
      this.studenti.sort((a, b) => {
        if (a.cognome > b.cognome) {
          return 1;
        } else if (a.cognome < b.cognome) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      this.studenti.sort((a, b) => {
        if (a.cognome < b.cognome) {
          return 1;
        } else if (a.cognome > b.cognome) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    this.orderCognomeAsc = !this.orderCognomeAsc;
  }
}

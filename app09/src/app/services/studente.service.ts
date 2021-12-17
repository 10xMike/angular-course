import { Injectable } from '@angular/core';
import { studenti } from '../data/studenti';
import { Studente } from '../models/studente';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class StudenteService {
  constructor(private ls: LoggerService) {}

  getStudenti(): Studente[] {
    //chiedo al servizio Logger di stampare in console
    this.ls.log('Studente Service: caricato elenco studenti');
    //restituisco elenco studenti
    return studenti;
  }
}

import { Injectable } from '@angular/core';
import { nomi } from '../data/nomi';

@Injectable({ providedIn: 'root' })
export class NomeService {
  getNomi(): string[] {
    //restituisco l'unica istanza di array di nomi
    return nomi;
  }

  addNome(nome: string): void {
    //aggiungi un nome alla lista
    nomi.push(nome);
  }
}

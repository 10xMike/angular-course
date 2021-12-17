import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root',
})
export class UtenteService {
  utente: Utente;
  constructor(private router: Router) {
    this.utente = {
      username: 'ospite',
      password: '123',
      autenticato: false,
    };
  }
  autentica(user: string, pass: string): void {
    //(simulo richiesta) chiede al server se esiste un utente con quel nome e password
    if (user == 'pippo' && pass == 'pluto') {
      this.utente = {
        username: user,
        password: pass,
        autenticato: true,
      };
      alert('utente ' + user + ' riconosciuto');
      this.router.navigateByUrl('pazienti');
    } else {
      alert('utente ' + user + ' NON riconosciuto');
      this.router.navigateByUrl('errore');
    }
  }

  logout(): void {
    this.utente = {
      username: 'ospite',
      password: '123',
      autenticato: false,
    };
    alert('utente disconnesso');
    this.router.navigateByUrl('login');
  }
}

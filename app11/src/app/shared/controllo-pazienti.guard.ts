import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UtenteService } from '../services/utente.service';

@Injectable({
  providedIn: 'root',
})
export class ControlloPazientiGuard implements CanActivate {

  constructor(
    private us:UtenteService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      // se utente collegato è autenticato da login ...
    if(this.us.utente.autenticato)
        return true; // permetti accesso
      //altrimenti
    return false;
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css'],
})
export class TemplateVariablesComponent implements OnInit {
  numero: number = 12;
  persone: Persona[];

  @ViewChild('display') display!: ElementRef;

  constructor() {
    this.persone = [
      new Persona('Maria', 'Verdi'),
      new Persona('Cinzia', 'Marrone'),
      new Persona('Stefania', 'Bianchi'),
    ];
  }

  ngOnInit(): void {}
  prendiColore(colore: any): void {
    // prendo come parametro la casella di testo
    // con identificativo #colore
    alert('Il tuo colore è: ' + colore.value);
  }
  inserisci(n: any, c: any): void {
    this.persone.push(new Persona(n.value, c.value));
    n.value = '';
    c.value = '';
  }

  elimina(p: number): void {
    if (confirm('Sicuro di eliminare?')) this.persone.splice(p, 1);

    //aggiorno il display
    this.display.nativeElement.innerHTML = 'pippo';
  }
}

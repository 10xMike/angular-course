import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-modifica-atleta',
  templateUrl: './modifica-atleta.component.html',
  styleUrls: ['./modifica-atleta.component.css'],
})
export class ModificaAtletaComponent implements OnInit {
  atleta: Atleta;
  constructor(
    private route: ActivatedRoute,
    private as: AtletaService,
    private router: Router
  ) {
    this.atleta = {
      id: 0,
      nome: 'asd',
      cognome: 'dasd',
      punti: 0,
    };
  }

  ngOnInit(): void {
    //estrarre parametro id da rotta attiva URL
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    //chiedere a servizio atleta con rispettivo id
    let atletaRestituito = this.as.getAtletaById(id);
    //sostituire atleta con id preso da servizio
    if (atletaRestituito) {
      this.atleta = atletaRestituito;
    } else {
      alert('atleta inesistente!');
      this.router.navigateByUrl('/atleti');
    }
  }
  conferma(n: any, c: any, p: any): void {
    // costruisco un oggetto dai parametri presi da input
    let atletaModificato = {
      id: this.atleta.id,
      nome: n.value,
      cognome: c.value,
      punti: p.value,
    };
    // chiede a servizio di sovrascrivere atleta
    this.as.updateAtleta(atletaModificato);
    //torna ai dettagli per controllare le modifiche
    this.router.navigateByUrl('/atleti/' + this.atleta.id);
  }
  elimina(): void {
    // chiedo al servizio di eliminare questo atleta
    if (confirm('Vuoi eliminare questo atleta?' + this.atleta.nome))
      this.as.deleteAtletaById(this.atleta.id);

    // vado a elenco
    this.router.navigateByUrl('/atleti');
  }
}

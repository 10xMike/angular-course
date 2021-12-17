import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllineamentoComponent } from './argomenti/allineamento/allineamento.component';
import { BadgeComponent } from './argomenti/badge/badge.component';
import { BordiComponent } from './argomenti/bordi/bordi.component';
import { CollegamentiComponent } from './argomenti/collegamenti/collegamenti.component';
import { ColonneComponent } from './argomenti/colonne/colonne.component';
import { ColoriComponent } from './argomenti/colori/colori.component';
import { ContainerComponent } from './argomenti/container/container.component';
import { DisposizioneComponent } from './argomenti/disposizione/disposizione.component';
import { ImmaginiComponent } from './argomenti/immagini/immagini.component';
import { ListeComponent } from './argomenti/liste/liste.component';
import { SpaziatureComponent } from './argomenti/spaziature/spaziature.component';
import { TabelleComponent } from './argomenti/tabelle/tabelle.component';
import { TestiComponent } from './argomenti/testi/testi.component';
import { VisibilitaComponent } from './argomenti/visibilita/visibilita.component';

const routes: Routes = [
  {
    path: 'container',
    component: ContainerComponent,
  },
  {
    path: 'liste',
    component: ListeComponent,
  },
  {
    path: 'badge',
    component: BadgeComponent,
  },
  {
    path: 'immagini',
    component: ImmaginiComponent,
  },
  {
    path: 'collegamenti',
    component: CollegamentiComponent,
  },
  {
    path: 'tabelle',
    component: TabelleComponent,
  },
  {
    path: 'testi',
    component: TestiComponent,
  },
  {
    path: 'disposizione',
    component: DisposizioneComponent,
  },
  {
    path: 'spaziature',
    component: SpaziatureComponent,
  },
  {
    path: 'allineamento',
    component: AllineamentoComponent,
  },
  {
    path: 'bordi',
    component: BordiComponent,
  },
  {
    path: 'colonne',
    component: ColonneComponent,
  },
  {
    path: 'visibilita',
    component: VisibilitaComponent,
  },
  {
    path: 'colori',
    component: ColoriComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'container',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'container',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

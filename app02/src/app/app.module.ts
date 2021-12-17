import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { PulsanteComponent } from './shared/pulsante.component';
import { NuovoComponent } from './nuovo/nuovo.component';

@NgModule({
  declarations: [
    AppComponent,
    PulsanteComponent,
    MainComponent,
    ProdottoComponent,
    NuovoComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

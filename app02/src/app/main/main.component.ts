import { Component } from '@angular/core';

@Component({
  selector: 'main-comp',
  template: `<main>
    <h2>{{ TitoloMain }}</h2>
    <p>{{ testoMain }}</p>
    <pulsante></pulsante>
  </main>`,
  styles: [
    `
      main {
        background-color: #ddd;
        border: 2px solid black;
        padding: 0 2%;
      }
      h2 {
        text-transform: uppercase;
      }
      p {
        white-space: pre-wrap;
      }
    `,
  ],
})
export class MainComponent {
  TitoloMain: string = 'Concetta sulla Riviera';
  testoMain: string = 'Testo del main. \nQuesto testo può essere molto lungo';
}

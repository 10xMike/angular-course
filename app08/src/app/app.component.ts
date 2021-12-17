import { Component } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app08';

  direttive: boolean = false;
  pipes: boolean = true;

  mostraDirettiva(): void {
    this.direttive = !this.direttive;
  }
  content: boolean = false;
  mostraContent(): void {
    this.content = !this.content;
  }
  template: boolean = true;
  mostraTemplate(): void {
    this.template = !this.template;
  }
  mostraPipes():void{
    this.pipes = !this.pipes;
  }
}

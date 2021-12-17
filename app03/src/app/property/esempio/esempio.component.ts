import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css'],
})
export class EsempioComponent implements OnInit {
  percorsoImg: string = 'assets/img/angular.png';
  altImg: string = 'Viaggi avventura';
  percorsoLink: string = 'https://www.lastampa.it';
  contenutoParagrafo: string = 'Nuovo Contenuto';
  peso: number = 32;
  bloccato: boolean = true;
  stiletesto: string = "color:blue;background-color:violet;font-size:1.4rem;"
  classeTesto: string = "evidenziato";
  constructor() {}

  ngOnInit(): void {}
}

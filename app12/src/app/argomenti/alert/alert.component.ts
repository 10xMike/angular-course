import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  pezzi: number;
  alert: string[];
  constructor() {
    this.pezzi = 10;
    this.alert = ['alert', 'alert-success'];
  }

  ngOnInit(): void {}
  compra(): void {
    if (this.pezzi > 0) {
      this.pezzi--;
    } else {
      alert('disponibilità terminata');
    }
    if (this.pezzi === 0) {
      this.alert = ['alert', 'alert-danger'];
    } else if(this.pezzi < 5){
      this.alert = ['alert', 'alert-warning'];
    }
  }
}

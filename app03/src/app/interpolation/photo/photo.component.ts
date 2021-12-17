import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  foto = {
    albumId: 1,
    id: 7,
    title: 'officia delectus consequatur vero aut veniam explicabo molestias',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  };
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-elenco-post',
  templateUrl: './elenco-post.component.html',
  styleUrls: ['./elenco-post.component.css'],
})
export class ElencoPostComponent implements OnInit {
  posts: Post[];
  constructor(private ps: PostService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.posts = this.ps.getAllPosts();
  }
}

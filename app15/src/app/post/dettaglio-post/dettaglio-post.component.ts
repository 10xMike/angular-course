import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-dettaglio-post',
  templateUrl: './dettaglio-post.component.html',
  styleUrls: ['./dettaglio-post.component.css'],
})
export class DettaglioPostComponent implements OnInit {
  post: Post;
  constructor(private ps: PostService, private route: ActivatedRoute) {
    this.post = {
      userId: 0,
      id: 0,
      title: '',
      body: '',
    };
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.ps.getPostById(id);
  }

  elimina() {}
}

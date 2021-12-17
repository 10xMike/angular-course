import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-modifica-post',
  templateUrl: './modifica-post.component.html',
  styleUrls: ['./modifica-post.component.css'],
})
export class ModificaPostComponent implements OnInit {
  post: Post;
  postForm: FormGroup;
  constructor(private ps: PostService, private route: ActivatedRoute) {
    (this.post = {
      id: 0,
      userId: 0,
      title: '',
      body: '',
    }),
      (this.postForm = new FormGroup({
        id: new FormControl({ value: 0, disabled: true }, Validators.required),
        userId: new FormControl(0, Validators.required),
        title: new FormControl('', Validators.required),
        body: new FormControl('', Validators.required),
      }));
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.ps.getPostById(id);
    this.postForm.setValue({
      id: this.post.id,
      userId: this.post.userId,
      title: this.post.title,
      body: this.post.body,
    });
  }

  onSubmit(): void {
    let post = {
      id: this.postForm.controls.id.value,
      userId: this.postForm.controls.userId.value,
      title: this.postForm.controls.title.value,
      body: this.postForm.controls.body.value,
    };
  }
}

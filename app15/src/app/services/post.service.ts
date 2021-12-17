import { Injectable } from '@angular/core';
import { elencoPost } from '../data/post';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getAllPosts(): Post[] {
    //recupera elenco post
    return elencoPost;
  }

  getPostById(id: number): any {
    // recupera post con id
    return elencoPost.find((post) => (post.id = id));
  }

  addPost(post: Post): void {
    // invia post
    elencoPost.push(post);
  }

  updatePost(post: Post): void {
    // aggiorna
    let i = elencoPost.findIndex((p) => p.id == post.id);
    if (i >= 0) {
      elencoPost[i] = post;
    }
  }

  deletePost(id: number): void {
    // elimina post con id
  }
}

import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { AppError } from './common/app-error';
import { NotFoundError } from './common/not-found-error';
import { BadInput } from './common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts: any[];


  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll()
    .subscribe( res => this.posts = res);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
    .subscribe(
      res => {
        post['id'] = res.id;
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if ( error instanceof BadInput) {
          alert(' Bad Object Passing !! ');
        } else { throw error; }
    });
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(
      res => {
        console.log(res);
      });
  }

  deletePost(post) {
    this.service.delete(post.id)
    .subscribe(
      () => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if ( error instanceof NotFoundError) {
          alert('This post has already been deleted !! ');
        } else { throw error; }
    });
  }

}

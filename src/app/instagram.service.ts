import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Comment {
  message: string
  author: string
}

export interface Post {
  id?: number
  author: string
  image: string
  message: string
  likes?: string[]
  comments?: Comment[]
}


@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private author = "";
  public apiUrl = 'https://fake-tweets-api.herokuapp.com/posts';


  constructor(public httpClient: HttpClient) { }

  public all(): Promise<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl).toPromise();
  }

  public newPost(post: Post): Promise<Post> {
    return this.httpClient.post<Post>(this.apiUrl, post).toPromise();
  }

  public getById(id: number): Promise<Post> {
    return this.httpClient.get<Post>(`${this.apiUrl}/${id}`).toPromise();
  }

  public addComment(postId: number, comment: Comment): Promise<Comment> {
    return this.httpClient.post<Comment>(`${this.apiUrl}/${postId}/comments`, comment).toPromise();
  }

  public addLike(postId: number, like: string): Promise<void> {
    console.log(postId);
    return this.httpClient.post<void>(`${this.apiUrl}/${postId}/likes`, {author:like}).toPromise();
  }

  getAuthor(): string {
      return this.author;
  }
  setAuthor(author: string) {
      this.author = author;
  }
}

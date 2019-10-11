import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Comments } from '../classes/comments';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private HttpClient: HttpClient) { }

  commentUrl:string = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  getComments(listId): Observable<any>{

    return this.HttpClient.get(`${this.commentUrl}?_limit=${listId}'`);

  }

  post(newComment:Comments): Observable<any>{
    return this.HttpClient.post(this.commentUrl, newComment);
  }

}

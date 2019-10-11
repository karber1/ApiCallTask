import { Component, OnInit, } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';
import {Comments} from '../classes/comments';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {

  constructor(private _ApiServiceService: ApiServiceService) { }

  commentValues;

  receiveValues($event){

    this.commentValues = $event;

    this.sendValuesPost(this.commentValues); 

  }

  userComment:Comments;

  sendValuesPost(commentValues: Comments){
    
    this._ApiServiceService.post(commentValues).subscribe(
      data=> {
        this.userComment = data;
      }
      )

  }


  
  ngOnInit() {
        

  }

}

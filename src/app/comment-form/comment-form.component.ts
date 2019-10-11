import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Comments } from '../classes/comments';






@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  constructor() { }

  commentForm: FormGroup;


   commentObj: Comments = {
    name: '',
    body: '',
    email: '',
    postId: 44,
    id: 0
  } 

  commentValue: Comments = this.commentObj;

  @Output() commentEvent = new EventEmitter<Comments>();

  sendCommentValues(){
    this.commentEvent.emit(this.commentObj);
  }


  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';
import {Comments} from '../classes/comments';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private _ApiServiceService: ApiServiceService, private route: ActivatedRoute ) { }

  comments:Comments[]; 

  ngOnInit() {

    this.route.paramMap.subscribe(params=> {

      let id = params.get('id');
      
      if (id == null) {
        this._ApiServiceService.getComments(30).subscribe(
          data => {
            this.comments = data;
          }
        )
        
      } else {

        this._ApiServiceService.getComments(id).subscribe(
          data => {
            this.comments = data;
          }
        )
      }

    });

  }

}

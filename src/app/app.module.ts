import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
//Api 
import { ApiServiceService} from './services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { NavComponent } from './nav/nav.component';
//forms
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Materials
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AnimatedLogoComponent } from './animated-logo/animated-logo.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    CreateCommentComponent,
    NavComponent,
    CommentFormComponent,
    AnimatedLogoComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

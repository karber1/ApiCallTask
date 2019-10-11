import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';


const routes: Routes = [
  {path: 'content', component: ContentComponent},
  {path: 'content/:id', component: ContentComponent},
  {path: 'create-comment', component: CreateCommentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

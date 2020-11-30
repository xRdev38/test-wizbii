import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CommentComponent } from "./comment.component";

import {
  CommentMetaComponent,
  CommentContentComponent,
  CommentFormComponent
} from "./comment-helpers";

@NgModule({
  imports: [CommonModule],
  declarations: [
    CommentComponent,
    CommentMetaComponent,
    CommentContentComponent,
    CommentFormComponent
  ],
  exports: [
    CommonModule,
    CommentComponent,
    CommentMetaComponent,
    CommentContentComponent,
    CommentFormComponent
  ]
})
export class CommentModule {}

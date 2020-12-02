import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CommentModule } from '@app/comment/comment.module';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [SharedModule, CommonModule, CommentModule],
  declarations: [ArticleComponent],
  exports: [ArticleComponent]
})
export class ArticleModule {}

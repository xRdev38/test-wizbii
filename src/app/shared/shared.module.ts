import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShareButtonComponent, ThanxButtonComponent } from './buttons';
import {
  ArticleTagListComponent,
  ArticleMetaComponent,
  HashtagPipe
} from './article-helpers';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ShareButtonComponent,
    ThanxButtonComponent,
    ArticleTagListComponent,
    ArticleMetaComponent,
    HashtagPipe
  ],
  exports: [
    ShareButtonComponent,
    ThanxButtonComponent,
    ArticleTagListComponent,
    ArticleMetaComponent,
    HashtagPipe
  ]
})
export class SharedModule {}

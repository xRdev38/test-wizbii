import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ITag,
  IArticle,
  IComment,
  TagsService,
  CommentsService,
  ProfilesService
} from '@app/core';

import { IProfileView } from '@app/shared/article-helpers/profile-view.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticle | null = null;


  tags$: Observable<ITag[]> | null = null;
  comments$: Observable<IComment[]> | null = null;
  author$: Observable<IProfileView> | null = null;

  constructor(
    private tagsService: TagsService,
    private profilesService: ProfilesService,
    private commentsService: CommentsService
  ){}

  ngOnInit(): void {
      this.createTags();
      this.createAuthor();
      this.createComments();
  }

  createTags(): void {
    if( this.article !== null ) {
      this.tags$ = this.tagsService.getAll()
        .pipe(
            map( tag => {
                return this.article !== null ? this.tagsService.filterTags(tag, this.article.tagList) : [];
            })
        )
    }
  }

  createAuthor(): void {
    if( this.article !== null ) {
      this.author$ = this.profilesService.getById(this.article.profileId)
        .pipe( map( profile => {
            return {
              ...profile,
              createdAt: this.article?.createdAt ? this.article.createdAt : ''
            };
          })
        )
    }
  }

  createComments(): void {
    if( this.article !== null ) {
      this.comments$ = this.commentsService.getAll().pipe(
        map( comments => {
          return this.article !== null ? this.commentsService.filterComments(comments, this.article.id) : [];
        })
      );
    }
  }
}

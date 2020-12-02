import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  IUser
} from '@app/core';

import {
  UserService,
  TagsService,
  CommentsService,
  ArticlesService,
  ProfilesService,
} from '@app/core';

import { IArticleView } from '@app/article/article-view.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user$: Observable<IUser> | null = null;
  dataArticleView$: Observable<any> | null = null;

  constructor(
    private userService: UserService,
    private articlesService: ArticlesService,
    private tagsService: TagsService,
    private profilesService: ProfilesService,
    private commentsService: CommentsService
  ){}

  ngOnInit(): void {
    this.user$ = this.userService.getUser(1);
    this.dataArticleView$ = this.articlesService
    .getAll()
    .pipe(
      map( articles => {
        return articles.map( article => {
          return {
            id: article.id,
            description: article.description,
            body: article.body,
            tagList: this.tagsService.getAll().pipe(
              map( tag => {
                  return this.tagsService.filterTags(tag, article.tagList);
              })
            ),
            createdAt: article.createdAt,
            updatedAt: article.updatedAt,
            thanx: article.thanx,
            thanxCount: article.thanxCount,
            comments: this.commentsService.getAll().pipe(
              map( comment => {
                return this.commentsService.filterComments(comment, article.id);
              }),
              map( comments => {
                return comments.map(comment => {
                  return {
                    ...comment,
                    author: this.profilesService.getById(comment.profileId)
                  };
                });
              })
            ),
            author: this.profilesService.getById(article.profileId)
            .pipe( map( profile => {
                return {
                  ...profile,
                  createdAt: article.createdAt ? article.createdAt : ''
                };
              })
            )
          };
        });
      }),
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  IUser,
  IArticle,
  UserService,
  ArticlesService,
} from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user$: Observable<IUser> | null = null;
  articles$: Observable<IArticle[]> | null = null;

  constructor(
    private userService: UserService,
    private articlesService: ArticlesService,
  ){}

  ngOnInit(): void {
    this.user$ = this.userService.getUser(1);
    this.articles$ = this.articlesService.getAll();
  }
}

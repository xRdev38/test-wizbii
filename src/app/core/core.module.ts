import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  ApiService,
  TagsService,
  UserService,
  CommentsService,
  ProfilesService,
  ArticlesService,
} from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    TagsService,
    UserService,
    CommentsService,
    ProfilesService,
    ArticlesService,
  ],
  declarations: []
})
export class CoreModule { }

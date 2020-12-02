import { Observable } from 'rxjs';

import {
  ITag,
  IComment,
} from '@app/core';

import { IProfileView } from '@app/shared/article-helpers/profile-view.interface';
import { ICommentView } from '@app/comment/comment-view.interface';

export interface IArticleView {
  id: number;
  description: string;
  body: string;
  tagList: Observable<ITag[]>;
  createdAt: string;
  updatedAt: string;
  thanx: boolean;
  thanxCount: number;
  comments: Observable<ICommentView[]>;
  author: Observable<IProfileView>;
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { IComment } from '@app/core/models';

@Injectable()
export class CommentsService {

  constructor(private apiService: ApiService){}

  getAll(): Observable<IComment[]> {
    return this.apiService.get('/comments');
  }

  getById(id: number): Observable<IComment> {
    return this.apiService.get(`/comments/${id}`);
  }

  filterComments(comments: Array<IComment>, id: number): Array<IComment> {
    return comments.filter(comment => comment.id === id);
  }
}

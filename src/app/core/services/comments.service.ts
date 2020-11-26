import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Comment } from '@app/core/models';

@Injectable()
export class CommentsService {

  constructor(private apiService: ApiService){}

  getAll(): Observable<Comment[]> {
    return this.apiService.get('/comments');
  }

  getById(id: string): Observable<Comment> {
    return this.apiService.get(`/comments/${id}`);
  }
}

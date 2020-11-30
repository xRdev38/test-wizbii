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

  getById(id: string): Observable<IComment> {
    return this.apiService.get(`/comments/${id}`);
  }
}

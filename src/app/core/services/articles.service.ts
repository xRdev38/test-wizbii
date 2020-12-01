import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { IArticle } from '@app/core/models';

@Injectable()
export class ArticlesService {

  constructor(private apiService: ApiService){}

  getAll(): Observable<IArticle[]> {
    return this.apiService.get('/articles');
  }

  getById(id: number): Observable<IArticle> {
    return this.apiService.get(`/articles/${id}`);
  }
}

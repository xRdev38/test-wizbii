import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Article } from '@app/core/models';

@Injectable()
export class ArticlesService {

  constructor(private apiService: ApiService){}

  getAll(): Observable<Article[]> {
    return this.apiService.get('/articles');
  }

  getById(id: string): Observable<Article> {
    return this.apiService.get(`/articles/${id}`);
  }
}

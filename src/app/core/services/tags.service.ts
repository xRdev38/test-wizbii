import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Tag } from '@app/core/models';

@Injectable()
export class TagsService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<Tag[]> {
    return this.apiService.get('/tags');
  }

  getById(id: string): Observable<Tag>{
    return this.apiService.get(`/tags/${id}`);
  }

}

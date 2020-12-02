import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ITag } from '@app/core/models';

@Injectable()
export class TagsService {
  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<ITag[]> {
    return this.apiService.get('/tags');
  }

  getById(id: string): Observable<ITag>{
    return this.apiService.get(`/tags/${id}`);
  }

  filterTags(tags: Array<ITag>, groupId: number[]): Array<ITag> {
    return tags.filter(tag => groupId.includes(tag.id));
  }

}

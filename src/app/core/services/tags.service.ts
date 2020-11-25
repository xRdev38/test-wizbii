import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Tag } from '@app/core/models';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root', })
export class TagsService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<[Tag]> {
    return this.apiService.get('/tags');
  }

}

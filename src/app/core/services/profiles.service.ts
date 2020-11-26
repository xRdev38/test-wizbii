import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Profile } from '@app/core/models';

@Injectable()
export class ProfilesService {
  constructor(private apiService: ApiService){}

  getAll(): Observable<Profile[]>{
    return this.apiService.get('/profiles');
  }

  getById(id: string): Observable<Profile>{
    return this.apiService.get(`/profiles/${id}`);
  }
}

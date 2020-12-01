import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { IProfile } from '@app/core/models';

@Injectable()
export class ProfilesService {
  constructor(private apiService: ApiService){}

  getAll(): Observable<IProfile[]>{
    return this.apiService.get('/profiles');
  }

  getById(id: number): Observable<IProfile>{
    return this.apiService.get(`/profiles/${id}`);
  }
}

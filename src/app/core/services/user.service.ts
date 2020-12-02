import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { IUser } from '@app/core/models';

@Injectable()
export class UserService {

  constructor(private apiService: ApiService){}

  getUser(id: number): Observable<IUser>{
    return this.apiService.get(`/users/${id}`);
  }
}

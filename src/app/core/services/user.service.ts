import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { IUser } from '@app/core/models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class UserService {
  // private currentUserSubject = new BehaviorSubject<User>({} as User);
  // public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  //
  // private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  // public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService){}

  getUser(id: number): Observable<IUser>{
    return this.apiService.get(`/users/${id}`);
  }
}

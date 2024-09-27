import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://localhost:44323/api/users';

  constructor(private client: HttpClient) { }

  getAll(): Observable<any> {
    return this.client.get<any>(this.url + '/get-all');
  }

  add(user: User): Observable<any> {
    return this.client.post(this.url + '/create', user);
  }

}

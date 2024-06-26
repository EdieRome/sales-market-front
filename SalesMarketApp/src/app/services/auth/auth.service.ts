import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://localhost:44323/api/auth/login';

  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    var parameters = new HttpParams()
      .set('user', username)
      .set('pass', password);

    return this.client.get<any>(this.url, { params: parameters });
  }

  logout() {
  }
}

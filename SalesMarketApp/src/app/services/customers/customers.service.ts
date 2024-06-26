import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url = 'https://localhost:44323/api/customers';

  constructor(private client: HttpClient) { }

  getAll(): Observable<any> {
    return this.client.get<any>(this.url + '/get-all');
  }

  add(customer: Customer) {
    this.client.post(this.url + '/create', customer);
  }

  update(customer: Customer) {
    this.client.put(this.url + '/update', customer);
  }

  delete(id: number) {
    this.client.delete(this.url + '/' + id + '/delete');
  }

}

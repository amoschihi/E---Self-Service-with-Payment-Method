import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(this.baseUrl+'/login', data);
  }

  register(data) {
    return this.http.post(this.baseUrl+'/register', data);
  }

  requestPasswordReset(data) {
    return this.http.post(this.baseUrl+'/request-password', data);
  }

  changePassword(data) {
    return this.http.post(this.baseUrl+'/reset-password', data);
  }
}

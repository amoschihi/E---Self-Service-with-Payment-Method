import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = "http://localhost:8000/api";
  constructor(private http: HttpClient) { }

  addRole(data) {
    return this.http.post(this.url+'/roles', data);
  }

  getRoles() {
    return this.http.get(this.url+'/roles');
  }
}

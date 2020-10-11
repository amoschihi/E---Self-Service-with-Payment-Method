import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove(token) {
    localStorage.removeItem(token);
  }

  isValid() {
    if(this.get()) {
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.isValid();
  }
}

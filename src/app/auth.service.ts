import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import GoTrue from 'gotrue-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  auth: GoTrue;

  constructor() {
    this.auth = new GoTrue({
      APIUrl: 'https://devmohamed.com/.netlify/identity',
      audience: '',
      setCookie: false,
    });
  }

  isLoggedIn() {
    return this.auth.currentUser()?.email != null;
  }

  canActivate(): boolean {
    return this.isLoggedIn();
  }

}

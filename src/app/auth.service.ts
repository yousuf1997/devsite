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

  logOut() {
    if (this.isLoggedIn()) {
      this.auth.currentUser().logout()
        .then(response => window.location.reload())
        .catch(error => {
          console.log("Failed to logout user: %o", error);
          throw error;
        });
    }
  }

  canActivate(): boolean {
    return this.isLoggedIn();
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { AuthenticationService }   from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json'),
  withCredentials: true
};

@Injectable()
export class GuardMember implements CanActivate{


    constructor(
      private router: Router,
      private http: HttpClient,
      private authenticationService: AuthenticationService
    ) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authenticationService.isAuthenticated()
      .then(response => {
        if(response && response.loggedIn){
          return true
        }else{
          this.router.navigate(['/login']);
          return false
        }
      })
      .catch(err => {
        this.router.navigate(['/login']);
        return false
      })
    }
}

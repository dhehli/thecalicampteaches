import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders().set('Access-Control-Allow-Credentials', 'true').set('Content-Type', 'application/json'),
  params: {userId: "123"}
};

@Injectable()
export class AuthenticationGuard implements CanActivate{

    private url = 'http://localhost:3000/api/authcheck';

    constructor(
      private router: Router,
      private http: HttpClient
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        this.http
          .get(this.url, httpOptions)
          .toPromise()
          .then(response => {
            console.log(response)
          })
          .catch(e => console.log(e))

          return true;

    }
}

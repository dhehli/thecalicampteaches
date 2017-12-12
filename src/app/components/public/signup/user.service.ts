import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json'),
  withCredentials: true
};

@Injectable()
export class UserService {

  private url = 'http://localhost:3000/api/signup';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** POST: add a new hero to the server */
  addUser(user): Promise<any> {
    return this.http
      .post(this.url, JSON.stringify(user), httpOptions)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<string> {
    //console.error('An error occurred', console.log(error)); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

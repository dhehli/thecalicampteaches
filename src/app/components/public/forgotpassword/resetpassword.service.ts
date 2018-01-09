import { environment } from '../../../../environments/environment';
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
export class ResetPasswordService {
  private url = `${environment.apiURL}/api/resetpassword`;

  constructor(
    private http: HttpClient
  ) { }

  checkHash(hash: string) : Promise<any> {
    return this.http
      .get(`${this.url}/${hash}`, httpOptions)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }

  resetPassword(hash: string, password: string): Promise<any> {
    const data = {
        password
    }
    return this.http
      .post(`${this.url}/${hash}`, JSON.stringify(data), httpOptions)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<string> {
    //console.error('An error occurred', console.log(error)); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

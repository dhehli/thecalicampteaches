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
export class ForgotPasswordService {


}

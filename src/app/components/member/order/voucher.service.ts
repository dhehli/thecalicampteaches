import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Order } from './order';
import { MessageService } from '../../admin/message/message.service';

const httpOptions = {
  withCredentials: true
};

@Injectable()
export class VoucherServiceMember {

  private voucherUrl = `${environment.apiURL}/api/vouchermember`;  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** POST: add a new order to the server */
  isValidVoucher(code: string): Observable<any> {
    const data = {
      code: code
    }
    return this.http.post(this.voucherUrl, data, httpOptions).pipe(
      tap((order: string) => this.log(`add`)),
      catchError(this.handleError<any>('addOrder'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a OrderService message with the MessageService */
  private log(message: string) {
    this.messageService.add('OrderService: ' + message);
  }
}

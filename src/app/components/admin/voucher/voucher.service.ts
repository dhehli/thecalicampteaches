import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Voucher } from './voucher';
import { MessageService } from '../message/message.service';

const httpOptions = {
  withCredentials: true
};

@Injectable()
export class VoucherService {

  private voucherUrl = `${environment.apiURL}/api/voucher`;  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET vouchers from the server */
  getVouchers (): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(this.voucherUrl, httpOptions)
      .pipe(
        tap(vouchers => this.log(`fetched vouchers`)),
        catchError(this.handleError('getVoucheres', []))
      );
  }

  /** GET voucher by id. Will 404 if id not found */
  getVoucher(id: string): Observable<Voucher> {
    const url = `${this.voucherUrl}/${id}`;
    return this.http.get<Voucher>(url, httpOptions).pipe(
      tap(_ => this.log(`fetched voucher id=${id}`)),
      catchError(this.handleError<Voucher>(`getVoucher id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new voucher to the server */
  addVoucher (voucher: Voucher): Observable<any> {
    return this.http.post<Voucher>(this.voucherUrl, voucher, httpOptions).pipe(
      tap((voucher: Voucher) => this.log(`added voucher w/ id=${voucher.id}`)),
      catchError(this.handleError<Voucher>('addVoucher'))
    );
  }

  /** DELETE: delete the voucher from the server */
  deleteVoucher (voucher: Voucher | number): Observable<Voucher> {
    const id = typeof voucher === 'number' ? voucher : voucher.id;
    const url = `${this.voucherUrl}/${id}`;

    return this.http.delete<Voucher>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted voucher id=${id}`)),
      catchError(this.handleError<Voucher>('deleteVoucher'))
    );
  }

  /** PUT: update the voucher on the server */
  updateVoucher (voucher: Voucher): Observable<any> {
    return this.http.put(`${this.voucherUrl}/${voucher.id}`, voucher, httpOptions).pipe(
      tap(_ => this.log(`updated voucher id=${voucher.id}`)),
      catchError(this.handleError<any>('updateVoucher'))
    );
  }

  /** GET voucher by id. Return `undefined` when id not found */
  getVoucherNo404<Data>(id: number): Observable<Voucher> {
    const url = `${this.voucherUrl}/?id=${id}`;
    return this.http.get<Voucher[]>(url)
      .pipe(
        map(vouchers => vouchers[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} voucher id=${id}`);
        }),
        catchError(this.handleError<Voucher>(`getVoucher id=${id}`))
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

  /** Log a VoucherService message with the MessageService */
  private log(message: string) {
    this.messageService.add('VoucherService: ' + message);
  }
}

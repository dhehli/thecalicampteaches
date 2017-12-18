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
export class OrderServiceMember {

  private orderUrl = 'http://localhost:3000/api/order';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET orderes from the server */
  getOrders (): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl, httpOptions)
      .pipe(
        tap(orderes => this.log(`fetched orderes`)),
        catchError(this.handleError('getOrderes', []))
      );
  }

  /** GET order by id. Return `undefined` when id not found */
  getOrderNo404<Data>(id: number): Observable<Order> {
    const url = `${this.orderUrl}/?id=${id}`;
    return this.http.get<Order[]>(url, httpOptions)
      .pipe(
        map(orderes => orderes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} order id=${id}`);
        }),
        catchError(this.handleError<Order>(`getOrder id=${id}`))
      );
  }

  /** GET order by id. Will 404 if id not found */
  getOrder(id: string): Observable<Order> {
    const url = `${this.orderUrl}/${id}`;
    return this.http.get<Order>(url, httpOptions).pipe(
      tap(_ => this.log(`fetched order id=${id}`)),
      catchError(this.handleError<Order>(`getOrder id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new order to the server */
  addOrder (order: FormData): Observable<any> {
    return this.http.post<FormData>(this.orderUrl, order, httpOptions).pipe(
      tap((order: FormData) => this.log(`add`)),
      catchError(this.handleError<FormData>('addOrder'))
    );
  }

  /** DELETE: delete the order from the server */
  deleteOrder (order: Order | number): Observable<Order> {
    const id = typeof order === 'number' ? order : order.id;
    const url = `${this.orderUrl}/${id}`;

    return this.http.delete<Order>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted order id=${id}`)),
      catchError(this.handleError<Order>('deleteOrder'))
    );
  }

  /** PUT: update the testimonial on the server */
  updateOrder(orderId: string): Observable<any> {
    console.log("updateorder")
    const url = `${this.orderUrl}/${orderId}`;

    return this.http.put(url, httpOptions).pipe(
      tap(_ => this.log('update')),
      catchError(this.handleError<any>('updateTestimonial'))
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

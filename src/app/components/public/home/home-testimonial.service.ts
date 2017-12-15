import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Testimonial } from '../../admin/testimonial/testimonial';
import { MessageService } from '../../admin/message/message.service';

const httpOptions = {
  withCredentials: true
};

@Injectable()
export class TestimonialServicePublic {

  private testimonialUrl = 'http://localhost:3000/api/testimonialpublic';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET testimoniales from the server */
  getTestimonials (): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.testimonialUrl, httpOptions)
      .pipe(
        tap(testimoniales => this.log(`fetched testimoniales`)),
        catchError(this.handleError('getTestimoniales', []))
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

  /** Log a TestimonialService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TestimonialService: ' + message);
  }
}

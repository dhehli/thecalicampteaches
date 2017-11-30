import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Testimonial } from './testimonial';
import { MessageService } from '../../message.service';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Credentials', 'true')
};

@Injectable()
export class TestimonialService {

  private testimonialUrl = 'http://localhost:3000/api/testimonial';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET testimoniales from the server */
  getTestimonials (): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.testimonialUrl)
      .pipe(
        tap(testimoniales => this.log(`fetched testimoniales`)),
        catchError(this.handleError('getTestimoniales', []))
      );
  }

  /** GET testimonial by id. Return `undefined` when id not found */
  getTestimonialNo404<Data>(id: number): Observable<Testimonial> {
    const url = `${this.testimonialUrl}/?id=${id}`;
    return this.http.get<Testimonial[]>(url)
      .pipe(
        map(testimoniales => testimoniales[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} testimonial id=${id}`);
        }),
        catchError(this.handleError<Testimonial>(`getTestimonial id=${id}`))
      );
  }

  /** GET testimonial by id. Will 404 if id not found */
  getTestimonial(id: string): Observable<Testimonial> {
    const url = `${this.testimonialUrl}/${id}`;
    return this.http.get<Testimonial>(url).pipe(
      tap(_ => this.log(`fetched testimonial id=${id}`)),
      catchError(this.handleError<Testimonial>(`getTestimonial id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new testimonial to the server */
  addTestimonial (testimonial: Testimonial): Observable<any> {
    return this.http.post<Testimonial>(this.testimonialUrl, testimonial, httpOptions).pipe(
      tap((testimonial: Testimonial) => this.log(`added testimonial w/ id=${testimonial.id}`)),
      catchError(this.handleError<Testimonial>('addTestimonial'))
    );
  }

  /** DELETE: delete the testimonial from the server */
  deleteTestimonial (testimonial: Testimonial | number): Observable<Testimonial> {
    const id = typeof testimonial === 'number' ? testimonial : testimonial.id;
    const url = `${this.testimonialUrl}/${id}`;

    return this.http.delete<Testimonial>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted testimonial id=${id}`)),
      catchError(this.handleError<Testimonial>('deleteTestimonial'))
    );
  }

  /** PUT: update the testimonial on the server */
  updateTestimonial (testimonial: Testimonial): Observable<any> {
    const url = `${this.testimonialUrl}/${testimonial.id}`;

    return this.http.put(url, testimonial, httpOptions).pipe(
      tap(_ => this.log(`updated testimonial id=${testimonial.id}`)),
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

  /** Log a TestimonialService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TestimonialService: ' + message);
  }
}

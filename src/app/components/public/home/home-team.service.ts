import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Team } from '../../admin/team/team';
import { MessageService } from '../../admin/message/message.service';

const httpOptions = {
  withCredentials: true
};

@Injectable()
export class TeamServicePublic {

  private teamUrl = `${environment.apiURL}/api/teampublic`;  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET teames from the server */
  getTeams (): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl, httpOptions)
      .pipe(
        tap(teams => this.log(`fetched teames`)),
        catchError(this.handleError('getTeames', []))
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

  /** Log a TeamService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TeamService: ' + message);
  }
}

import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Team } from './team';
import { MessageService } from '../message/message.service';

const httpOptions = {
  withCredentials: true
};

@Injectable()
export class TeamService {

  private teamUrl = `${environment.apiURL}/api/team`;  // URL to web api

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

  /** GET team by id. Return `undefined` when id not found */
  getTeamNo404<Data>(id: number): Observable<Team> {
    const url = `${this.teamUrl}/?id=${id}`;
    return this.http.get<Team[]>(url, httpOptions)
      .pipe(
        map(teames => teames[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} team id=${id}`);
        }),
        catchError(this.handleError<Team>(`getTeam id=${id}`))
      );
  }

  /** GET team by id. Will 404 if id not found */
  getTeam(id: string): Observable<Team> {
    const url = `${this.teamUrl}/${id}`;
    return this.http.get<Team>(url, httpOptions).pipe(
      tap(_ => this.log(`fetched team id=${id}`)),
      catchError(this.handleError<Team>(`getTeam id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new team to the server */
  addTeam (team: FormData): Observable<any> {
    return this.http.post<FormData>(this.teamUrl, team, httpOptions).pipe(
      tap((team: FormData) => this.log(`add`)),
      catchError(this.handleError<FormData>('addTeam'))
    );
  }

  /** DELETE: delete the team from the server */
  deleteTeam (team: Team | number): Observable<Team> {
    const id = typeof team === 'number' ? team : team.id;
    const url = `${this.teamUrl}/${id}`;

    return this.http.delete<Team>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted team id=${id}`)),
      catchError(this.handleError<Team>('deleteTeam'))
    );
  }

  /** PUT: update the team on the server */
  updateTeam (team: FormData): Observable<any> {
    const url = `${this.teamUrl}/${team.get('id')}`;

    return this.http.put(url, team, httpOptions).pipe(
      tap(_ => this.log('update')),
      catchError(this.handleError<any>('updateTeam'))
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

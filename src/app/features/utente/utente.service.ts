import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Utente } from 'src/app/model/utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private apiServer = 'http://localhost:8080/api/utente';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /** GET User from the server */
  getUsers(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.apiServer)
  }

  /** GET User by id. Will 404 if id not found */
  getUser(id: number): Observable<Utente> {
    const url = `${this.apiServer}/${id}`;
    return this.http.get<Utente>(url).pipe(
      tap(_ => console.log(`fetched User id=${id}`)),
      catchError(this.handleError<Utente>(`getUser id=${id}`))
    );
  }

  /** POST: add a new regista to the server */
  addUser(filmInput: Utente): Observable<Utente> {
    return this.http.post<Utente>(this.apiServer, filmInput, this.httpOptions).pipe(
      tap((newFilm: Utente) => console.log(`added film w/ id=${newFilm.id}`)),
      catchError(this.handleError<Utente>('addFilm'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

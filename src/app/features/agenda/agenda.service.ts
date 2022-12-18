import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Agenda } from 'src/app/model/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private apiServer = 'http://localhost:8080/api/agenda';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  constructor(private http: HttpClient) { }

  /** GET Agenda from the server */
  getAgenda(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.apiServer)
  }

  /** GET film by id. Will 404 if id not found */
  getAgendas(id: number): Observable<Agenda> {
    const url = `${this.apiServer}/${id}`;
    return this.http.get<Agenda>(url).pipe(
      tap(_ => console.log(`fetched Agenda id=${id}`)),
      catchError(this.handleError<Agenda>(`getAgenda id=${id}`))
    );
  }

  /** POST: add a new agenda to the server */
  addAgenda(agendaInput: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.apiServer, agendaInput, this.httpOptions).pipe(
      tap((newFilm: Agenda) => console.log(`added agenda w/ id=${newFilm.id}`)),
      catchError(this.handleError<Agenda>('addAgenda'))
    );
  }

  delete(id?:number): Observable<Agenda>{
    return this.http.delete<Agenda>(this.apiServer + '/' + id, this.httpOptions).pipe(
      tap((deleteAgenda: Agenda) => console.log(`added agenda w/ id=${deleteAgenda.id}`)),
      catchError(this.handleError<Agenda>('deleteAgenda'))
    )
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

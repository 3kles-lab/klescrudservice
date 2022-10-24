import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICrud } from './crud.interface';

@Injectable({
  providedIn: 'root'
})
export class KlesCrudService<T> implements ICrud<T> {

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(protected http: HttpClient, @Inject('url') protected url: string) {
  }

  list(): Observable<T[]> {
    return this.http.get<T[]>(this.url, this.httpOptions);
  }

  get(id: any): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`, this.httpOptions);
  }

  create(t: any): Observable<T> {
    return this.http.post<T>(this.url, t, this.httpOptions);
  }

  update(id: any, t: any): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, t, this.httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }
}

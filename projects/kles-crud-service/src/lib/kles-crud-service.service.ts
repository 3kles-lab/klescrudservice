import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICrud, IOption, IOptionBody, IOptionEvents, IOptionResponse } from './crud.interface';

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

  list(options?: IOptionBody): Observable<T[] | T>;
  list(options?: IOptionEvents): Observable<HttpEvent<T>>;
  list(options?: IOptionResponse): Observable<HttpResponse<T[] | T>>;
  list(options?: IOption): Observable<T | T[]> | Observable<HttpEvent<T>> | Observable<HttpResponse<T | T[]>> {
    return this.http.get<T[]>(this.url, { ...this.httpOptions, ...options });
  }

  get(id: any, options?: IOptionBody): Observable<T>;
  get(id: any, options?: IOptionEvents): Observable<HttpEvent<T>>;
  get(id: any, options?: IOptionResponse): Observable<HttpResponse<T>>;
  get(id: any, options?: IOption): Observable<T> | Observable<HttpEvent<T>> | Observable<HttpResponse<T>> {
    return this.http.get<T>(`${this.url}/${id}`, { ...this.httpOptions, ...options });
  }

  create(t: any, options?: IOptionBody): Observable<T>;
  create(t: any, options?: IOptionEvents): Observable<HttpEvent<T>>;
  create(t: any, options?: IOptionResponse): Observable<HttpResponse<T>>;
  create(t: any, options?: IOption): Observable<T> | Observable<HttpEvent<T>> | Observable<HttpResponse<T>> {
    return this.http.post<T>(this.url, t, { ...this.httpOptions, ...options });
  }

  update(id: any, t: T, options?: IOptionBody): Observable<T>;
  update(id: any, t: T, options?: IOptionEvents): Observable<HttpEvent<T>>;
  update(id: any, t: T, options?: IOptionResponse): Observable<HttpResponse<T>>;
  update(id: any, t: any, options?: IOption): Observable<T> | Observable<HttpEvent<T>> | Observable<HttpResponse<T>> {
    return this.http.put<T>(`${this.url}/${id}`, t, { ...this.httpOptions, ...options });
  }

  delete(id: any, options?: IOptionBody): Observable<T>;
  delete(id: any, options?: IOptionEvents): Observable<HttpEvent<T>>;
  delete(id: any, options?: IOptionResponse): Observable<HttpResponse<T>>;
  delete(id: any, options?: IOption): Observable<T> | Observable<HttpEvent<T>> | Observable<HttpResponse<T>> {
    return this.http.delete<T>(`${this.url}/${id}`, { ...this.httpOptions, ...options });
  }
}

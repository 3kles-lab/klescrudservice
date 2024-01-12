import { HttpHeaders, HttpClient, HttpContext } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICrud } from './crud.interface';

class IOption {
  params?: any;
  context?: HttpContext;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

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

  list(options?: IOption): Observable<T[]> {
    return this.http.get<T[]>(this.url, { ...this.httpOptions, ...options });
  }

  get(id: any, options?: IOption): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`, { ...this.httpOptions, ...options });
  }

  create(t: any, options?: IOption): Observable<T> {
    return this.http.post<T>(this.url, t, { ...this.httpOptions, ...options });
  }

  update(id: any, t: any, options?: IOption): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, t, { ...this.httpOptions, ...options });
  }

  delete(id: any, options?: IOption): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { ...this.httpOptions, ...options });
  }
}

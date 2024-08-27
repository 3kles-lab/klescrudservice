import { Observable } from 'rxjs';
import { HttpContext, HttpEvent, HttpResponse } from '@angular/common/http';

export interface IOption {
    params?: any;
    context?: HttpContext;
    reportProgress?: boolean;
    withCredentials?: boolean;
    observe?: any;
    responseType?: any;
}

export class IOptionBody implements IOption {
    observe: 'body';
}

export class IOptionResponse implements IOption {
    observe: 'response';
}
export class IOptionEvents implements IOption {
    observe: 'events';
}

export interface ICrud<T> {
    list(options?: IOptionBody): Observable<T[] | T>;
    list(options?: IOptionEvents): Observable<HttpEvent<T>>;
    list(options?: IOptionResponse): Observable<HttpResponse<T[] | T>>;

    get(id: any, options?: IOptionBody): Observable<T>;
    get(id: any, options?: IOptionEvents): Observable<HttpEvent<T>>;
    get(id: any, options?: IOptionResponse): Observable<HttpResponse<T>>;

    create(t: any, options?: IOptionBody): Observable<T>;
    create(t: any, options?: IOptionEvents): Observable<HttpEvent<T>>;
    create(t: any, options?: IOptionResponse): Observable<HttpResponse<T>>;

    update(id: any, t: T, options?: IOptionBody): Observable<T>;
    update(id: any, t: T, options?: IOptionEvents): Observable<HttpEvent<T>>;
    update(id: any, t: T, options?: IOptionResponse): Observable<HttpResponse<T>>;

    delete(id: any, options?: IOptionBody): Observable<T>;
    delete(id: any, options?: IOptionEvents): Observable<HttpEvent<T>>;
    delete(id: any, options?: IOptionResponse): Observable<HttpResponse<T>>;
}

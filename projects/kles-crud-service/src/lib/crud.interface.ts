import { Observable } from 'rxjs';

export interface ICrud<T> {
    list(): Observable<T[] | T>;
    get(id: any): Observable<T>;
    create(t: T): Observable<T>;
    update(id: any, t: T): Observable<T>;
    delete(id: any): any;
}

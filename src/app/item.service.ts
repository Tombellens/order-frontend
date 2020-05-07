import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'https://eurder-switchfully-solution.herokuapp.com/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(_ => this.log('fetched items')),
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item)
      .pipe(
        catchError(this.handleError('addItem', item))
      );
  }

  updateItem(item: Item, id: string): Observable<Item> {
    return this.http.put<Item>(this.itemsUrl + '/' + id, item)
      .pipe(
        catchError(this.handleError('updateItem', item))
      );
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message} `);
      return of(result as T);
    };
  }
}

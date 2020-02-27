import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://localhost:8081/books';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  save(name: string, read: boolean): Observable<any> {
    const book = {
      name,
      read
    };
    return this.httpClient.post<any>(this.url, book);
  }
}

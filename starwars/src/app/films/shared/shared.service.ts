import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  filmsUrl = 'https://swapi.co/api/films/'


  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any[]>(`${this.filmsUrl}`)
  }
}


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  filmsUrl = 'https://swapi.co/api/films/'

  constructor(private http: HttpClient) { }

  getMovies() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get('https://swapi.co/api/films', { headers });
  }
}

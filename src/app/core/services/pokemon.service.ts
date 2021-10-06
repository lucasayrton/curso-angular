import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  token = 'f1e8r9g18e9rg18er4g8';
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const httpOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return httpOptions;
  }

  getPokemon(pokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + pokemon, this.getHeaders());
  }

  post(body: object): Observable<any> {
    return this.http.post(this.url, body, this.getHeaders()).pipe(
      catchError((err) => {
        alert('erro');
        return throwError(err);
      })
    );
  }

  update(body: object) {
    return this.http.put(this.url, body, this.getHeaders()).pipe(
      catchError((err) => {
        alert('erro');
        return throwError(err);
      })
    );
  }

  delete() {
    return this.http.delete(this.url, this.getHeaders()).pipe(
      catchError((err) => {
        alert('erro');
        return throwError(err);
      })
    );
  }
}

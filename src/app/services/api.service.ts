import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../interfaces/Character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private _http:HttpClient) { }

  getCharacters(): Observable<Character[]> {
    const url: string = this.apiUrl;

    return this._http.get<Character[]>(url)
      .pipe(
        map( (response:any) => {
          return response.results
        } )
      )


  }

  getFavorites(): Observable<Character[]> {
    const url: string = this.apiUrl;

    return this._http.get<Character[]>(url)
      .pipe(
        map( (response:any) => {
          return response.results.slice(0,5)
        } )
      )


  }
}

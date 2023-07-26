import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Character } from '../interfaces/Character.interface';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;
  private baseUrl:string  = environment.baseUrl


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

  getFavorites(): Observable<any[]> {
    const url = `${this.baseUrl}/api/favorite/${localStorage.getItem('userId')}`;

    return this._http.get(url)
      .pipe(
        map((todo: any) => {
          return todo.favoritos
        })
      )
  }


  addFavorite(body: any): Observable<any> {
    const url = `${this.baseUrl}/api/favorite/newFavorite`;



    return this._http.post<any>(url, body)
      .pipe(
        map(resp => resp.ok),
        catchError(err => {
          // alert(err.error.msg)
          Swal.fire(
            'Oops',
            err.error.msg,
            'error'
          )
          return of(err.error)
        })
      )
  }

  deleteFavorite(IdCharacter:any,IdUser:any): Observable<any> {

    const url = `${this.baseUrl}/api/favorite/deleteFavorite`;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), body: { IdCharacter,IdUser }, };
    // const headers = new HttpHeaders().set(IdCharacter.toString(),IdUser)
    
    return this._http.delete<any>(url,options)
      
      
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/Character.interface';
import { switchMap } from 'rxjs/operators';

import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public characteres$: Observable<Character[]> = new Observable(); 
  favorites:any[] = [];

  constructor(
    private _apiService: ApiService,
  ){}


  ngOnInit(){
    this._apiService.getFavorites().subscribe( res => {
      this.favorites = res
    })
  }

  removeFavorite(favorite:any){
    // this._apiService.deleteFavorite(favorite.IdCharacter, favorite.IdUser).subscribe(res => {
   

    //     this._apiService.getFavorites().subscribe(res => {
    //       this.favorites = res
    //       //  alert('Accion realizada correctamente')
    //       Swal.fire(
    //         'Great!',
    //         'Accion realizada correctamente',
    //         'success'
    //       )
    //     })


    // })

    this._apiService
      .deleteFavorite(favorite.IdCharacter, favorite.IdUser)
      .pipe(switchMap(() => this._apiService.getFavorites()))
      .subscribe((res) => {
        this.favorites = res;
        Swal.fire('Great!', 'Accion realizada correctamente', 'success');
      });
 } 
  
}

/*

  this._apiService
      .deleteFavorite(favorite.IdCharacter, favorite.IdUser)
      .pipe(switchMap(() => this._apiService.getFavorites()))
      .subscribe((res) => {
        this.favorites = res;
        Swal.fire('Great!', 'Accion realizada correctamente', 'success');
      });

*/

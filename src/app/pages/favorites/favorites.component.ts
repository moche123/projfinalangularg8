import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/Character.interface';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public characteres$: Observable<Character[]> = new Observable(); 

  constructor(
    private _apiService: ApiService,
  ){}


  ngOnInit(){
    this.characteres$ = this._apiService.getFavorites()
  }
}

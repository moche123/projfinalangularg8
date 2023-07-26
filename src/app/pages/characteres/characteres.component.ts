import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/Character.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrls: ['./characteres.component.scss']
})
export class CharacteresComponent implements OnInit {

  public characteres$: Observable<Character[]> = new Observable(); 

  constructor(
    private _apiService: ApiService,
    private _router:Router
  ){}

  ngOnInit(){
    this.characteres$ = this._apiService.getCharacters()
  }

  addFavorite(character:Character){
    const body = {
      IdCharacter: character.id,
      IdUser: localStorage.getItem('userId'),
      nameCharacter: character.name,
      caracterUrlImagen: character.image,
      token: localStorage.getItem('token')
    }

    this._apiService.addFavorite(body).subscribe(ok => {

      if(ok !== false && typeof(ok) === 'boolean' ){
        this._router.navigateByUrl('/pages/favorites');
      }
    })
}


}

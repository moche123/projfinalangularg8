import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CharacteresComponent } from './characteres/characteres.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { pagesGuard } from '../guards/pages.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      },
      {
        path: 'characters',
        component: CharacteresComponent,
        canActivate: [pagesGuard()]
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        canActivate: [pagesGuard()]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

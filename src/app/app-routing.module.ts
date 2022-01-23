import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'character-list',
    pathMatch: 'full'
  },
  {
    path: 'character-list',
    loadChildren: () => import('./character-list/character-list.module').then( m => m.CharacterListPageModule)
  },
  {
    path: 'profile-character/:id',
    loadChildren: () => import('./profile-character/profile-character.module').then( m => m.ProfileCharacterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

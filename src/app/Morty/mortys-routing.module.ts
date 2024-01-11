import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ByPersonajePageComponent } from './pages/by-personaje-page/by-personaje-page.component';
import { ByEpisodePageComponent } from './pages/by-episode-page/by-episode-page.component';
import { ByDimensionesPageComponent } from './pages/by-dimensiones-page/by-dimensiones-page.component';

const routes:Routes=[
  {
    path:'by-personajes',
    component: ByPersonajePageComponent
  },
  {
    path:'by-episodios',
    component: ByEpisodePageComponent,
  },
  {
    path:'by-dimensiones',
    component: ByDimensionesPageComponent
  },
  {
    path:'**',
    redirectTo:'by-personajes'
  }


]


@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class MortysroutingModule {


}

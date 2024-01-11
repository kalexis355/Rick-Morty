import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Shared/pages/home-page/home-page.component';


const routes:Routes=[
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'mortys',
    loadChildren: ()=> import('./Morty/morty.module').then(modulo => modulo.MortyModule)
  },
  {
    path:'**',
    redirectTo:'mortys'
  }

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

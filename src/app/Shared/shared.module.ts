import { NgModule } from '@angular/core';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  imports:[
    RouterModule,
  ],
  declarations: [
    NavegacionComponent,
    HomePageComponent,
    BuscadorComponent,
  ],
  exports: [
    NavegacionComponent,
    BuscadorComponent
  ],
})
export class SharedModule { }

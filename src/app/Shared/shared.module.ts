import { NgModule } from '@angular/core';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  imports:[
    RouterModule,
  ],
  declarations: [
    NavegacionComponent,
    HomePageComponent,
    BuscadorComponent,
    LoadingComponent,
  ],
  exports: [
    NavegacionComponent,
    BuscadorComponent,
    LoadingComponent,
  ],
})
export class SharedModule { }

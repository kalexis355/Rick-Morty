import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByPersonajePageComponent } from './pages/by-personaje-page/by-personaje-page.component';
import { ByDimensionesPageComponent } from './pages/by-dimensiones-page/by-dimensiones-page.component';
import { ByEpisodePageComponent } from './pages/by-episode-page/by-episode-page.component';
import { MortysroutingModule } from './mortys-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { CardsMortyComponent } from './components/cards-morty/cards-morty.component';
import { CardsLocationsComponent } from './components/cards-locations/cards-locations.component';
import { CardsEpisodesComponent } from './components/cards-episodes/cards-episodes.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { CardsPersonajeComponent } from './components/cards-personaje/cards-personaje.component';
import { CardPersonajeLocationComponent } from './components/card-personaje-location/card-personaje-location.component';
import { PersonajeLocationComponent } from './pages/personaje-location/personaje-location.component';
import { PersonajeEpisodeComponent } from './pages/personaje-episode/personaje-episode.component';



@NgModule({
  declarations: [
    ByPersonajePageComponent,
    ByDimensionesPageComponent,
    ByEpisodePageComponent,
    CardsMortyComponent,
    CardsLocationsComponent,
    CardsEpisodesComponent,
    PersonajeComponent,
    CardsPersonajeComponent,
    CardPersonajeLocationComponent,
    PersonajeLocationComponent,
    PersonajeEpisodeComponent,

  ],
  imports: [
    CommonModule,
    MortysroutingModule,
    SharedModule
  ]
})
export class MortyModule { }

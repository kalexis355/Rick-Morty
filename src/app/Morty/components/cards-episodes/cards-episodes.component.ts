import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResultEpisode } from '../../interfaces/episode';

@Component({
  selector: 'morty-cards-episodes',
  templateUrl: './cards-episodes.component.html',
  styleUrls: ['./cards-episodes.component.css']
})
export class CardsEpisodesComponent {

  @Input()
  public episodes:ResultEpisode[]=[]

  @Output()
  public tituloEpisodio:EventEmitter<string>= new EventEmitter<string>()

  emitirtitulo(titulo:string){
    console.log(titulo);

    this.tituloEpisodio.emit(titulo)
  }


}

import { Component, Input } from '@angular/core';
import { ResultEpisode } from '../../interfaces/episode';

@Component({
  selector: 'morty-cards-episodes',
  templateUrl: './cards-episodes.component.html',
  styleUrls: ['./cards-episodes.component.css']
})
export class CardsEpisodesComponent {

  @Input()
  public episodes:ResultEpisode[]=[]


}

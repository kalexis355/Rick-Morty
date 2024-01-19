import { Component } from '@angular/core';
import { MortysService } from '../../services/mortys.service';
import { MortysEpisode, ResultEpisode } from '../../interfaces/episode';

@Component({
  selector: 'app-by-episode-page',
  templateUrl: './by-episode-page.component.html',
  styleUrls: ['./by-episode-page.component.css']
})
export class ByEpisodePageComponent {

  public episodes:ResultEpisode[]=[]
 constructor(private mortysService:MortysService){
  this.searchEpisode()
 }

  searchEpisode(){
    this.mortysService.searchEpisode()
    .subscribe((data:MortysEpisode)=>{
      this.episodes=data.results
      console.log(this.episodes);

    })
  }


}

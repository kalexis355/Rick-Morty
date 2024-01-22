import { Component, Input, OnInit } from '@angular/core';
import { MortysService } from '../../services/mortys.service';
import { MortysEpisode, ResultEpisode } from '../../interfaces/episode';

@Component({
  selector: 'app-by-episode-page',
  templateUrl: './by-episode-page.component.html',
  styleUrls: ['./by-episode-page.component.css']
})
export class ByEpisodePageComponent implements OnInit {

  public episodes:ResultEpisode[]=[]
  public isLoading:boolean=false;



 constructor(private mortysService:MortysService){
}
ngOnInit(): void {
    this.searchEpisode()
  }

  searchEpisode(){
    this.isLoading=true
    this.mortysService.searchEpisode()
    .subscribe((data:MortysEpisode)=>{
      this.episodes=data.results
      this.isLoading=false
    })
  }

  searchNameEpisode(termino:string){
    this.isLoading=true
    this.mortysService.searchNameEpisode(termino)
    .subscribe((episode:MortysEpisode | null)=>{
      if(episode){
        this.episodes = episode.results
      }else{
        this.episodes = []
      }
      this.isLoading = false
    })
  }


}

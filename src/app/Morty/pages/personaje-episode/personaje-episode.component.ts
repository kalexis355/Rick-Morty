import { Component, Input, OnInit } from '@angular/core';
import { ResultEpisode } from '../../interfaces/episode';
import { MortysService } from '../../services/mortys.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Result } from '../../interfaces/mortys';

@Component({
  selector: 'app-personaje-episode',
  templateUrl: './personaje-episode.component.html',
  styleUrls: ['./personaje-episode.component.css']
})
export class PersonajeEpisodeComponent implements OnInit{

  public episodeUnico?:ResultEpisode

  public titulo?:string

  public personajesEpisode:Result[]=[]



  constructor(
    private mortyService:MortysService,
    private router:Router,
    private activatedRoute:ActivatedRoute

  ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.mortyService.searchEpisodeUnico(id))
    )
    .subscribe((episodio)=>{
     if(!episodio){
      this.router.navigateByUrl('')
     }else{
       this.episodeUnico = episodio
       this.personajeEpisodio(episodio)
       this.titulo=episodio.name;

     }

    }
    )
  }

  personajeEpisodio(episode:ResultEpisode){
    episode.characters.forEach(personajes=>{
      if(personajes){
        this.mortyService.personajeresidente(personajes)
        .subscribe((participante)=>{
          if(participante)
          this.personajesEpisode.push(participante)
        })
      }

    })
  }


}

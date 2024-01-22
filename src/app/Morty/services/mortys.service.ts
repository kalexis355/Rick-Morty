import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,of,map, tap } from 'rxjs';
import { Mortys, Result } from '../interfaces/mortys';
import { MortysLocation, ResultLocation } from '../interfaces/location';
import { MortysEpisode, ResultEpisode } from '../interfaces/episode';


@Injectable({providedIn: 'root'})
export class MortysService {

  private apiUrlLocation:string='https://rickandmortyapi.com/api/location'
  private apiUrlePersonaje:string='https://rickandmortyapi.com/api/character'
  private apiUrlEpisode:string='https://rickandmortyapi.com/api/episode'

  public personajes:Result[]=[];
  public termino:string=''


  constructor(private http: HttpClient) { }


  personajeresidente(url:string):Observable<Result|null>{
    return this.http.get<Result>(url)
    .pipe(
      map(personaje => personaje.id>0? personaje:null),
      catchError(()=> of(null))
    )
  }


  searchPersajeUnico(id:string):Observable<Result|null>{
    const url=`${this.apiUrlePersonaje}/${id}`
    return this.http.get<Result>(url)
    .pipe(
      map(personaje => personaje.id>0? personaje:null),
      catchError(()=> of(null))

    )
  }

  searchLocationUnica(id:string):Observable<ResultLocation|null>{
    const url=`${this.apiUrlLocation}/${id}`
    return this.http.get<ResultLocation>(url)
    .pipe(
      map(personaje => personaje.id>0? personaje:null),
      catchError(()=> of(null))
    )
  }

  searchEpisodeUnico(id:string):Observable<ResultEpisode|null>{
    const url=`${this.apiUrlEpisode}/${id}`
    return this.http.get<ResultEpisode>(url)
    .pipe(
      map(episode => episode.id>0? episode:null),
      catchError(error=>of(null))
    )
  }


  searchNamePersonaje(termino:string):Observable<Mortys|  null>{
    return this.http.get<Mortys>(`${this.apiUrlePersonaje}?name=${termino}`)
    .pipe(
      catchError(()=>of(null)),
      tap(morties =>{
        if(morties){
          console.log(morties.results);

        this.personajes= morties?.results;
        this.termino= termino
        }else{
          this.personajes=[]
        }

      })
    )
  }

  searchNameLocation(termino:string):Observable<MortysLocation|null>{
    return this.http.get<MortysLocation>(`${this.apiUrlLocation}?name=${termino}`)
    .pipe(
      catchError(()=> of(null))
    )
  }

  searchNameEpisode(termino:string):Observable<MortysEpisode|null>{
    return this.http.get<MortysEpisode>(`${this.apiUrlEpisode}?name=${termino}`)
    .pipe(
      catchError(()=> of(null)
      )
    )
  }

  searchLocation():Observable<MortysLocation>{
    return this.http.get<MortysLocation>(`${this.apiUrlLocation}`)
    .pipe(
      catchError(()=>of())
    )
  }

  searchEpisode():Observable<MortysEpisode>{
    return this.http.get<MortysEpisode>(`${this.apiUrlEpisode}`)
    .pipe(
      catchError(()=>of())
    )
  }


}

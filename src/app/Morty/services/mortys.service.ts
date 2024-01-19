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

  public personaje?:Result;

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
      catchError(()=>of(null))
    )
  }


  searchNamePersonaje(termino:string):Observable<Mortys>{
    return this.http.get<Mortys>(`${this.apiUrlePersonaje}?name=${termino}`)
    .pipe(
      catchError(()=>of())
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

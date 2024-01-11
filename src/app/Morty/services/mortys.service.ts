import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,of } from 'rxjs';
import { Mortys, Result } from '../interfaces/mortys';
import { MortysLocation } from '../interfaces/location';
import { MortysEpisode } from '../interfaces/episode';


@Injectable({providedIn: 'root'})
export class MortysService {

  private apiUrlLocation:string='https://rickandmortyapi.com/api/location'
  private apiUrlePersonaje:string='https://rickandmortyapi.com/api/character'
  private apiUrlEpisode:string='https://rickandmortyapi.com/api/episode'

  constructor(private http: HttpClient) { }





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

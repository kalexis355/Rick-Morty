import { Component, OnInit } from '@angular/core';
import { ResultLocation } from '../../interfaces/location';
import { MortysService } from '../../services/mortys.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Mortys, Result } from '../../interfaces/mortys';

@Component({
  selector: 'morty-personaje-location',
  templateUrl: './personaje-location.component.html',
  styleUrls: ['./personaje-location.component.css']
})
export class PersonajeLocationComponent implements OnInit {

  public personajeLocation?:ResultLocation

  public personajeResidente:Result[]=[]

  constructor(
    private mortyService:MortysService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.mortyService.searchLocationUnica(id))
    )
    .subscribe( (personajeLocation) =>{
      if(!personajeLocation){
        return this.router.navigateByUrl('')
      }
      this.personajeLocation=personajeLocation

      this.personajesResidentes(personajeLocation)
      return

    }

    )


  }

  personajesResidentes(personajeLocation:ResultLocation){
    personajeLocation.residents.forEach(residentes => {
      console.log(residentes);
      this.mortyService.personajeresidente(residentes)
      .subscribe( (personajeRLocation) =>{
        console.log('hola',personajeRLocation);
        if(personajeRLocation){
          this.personajeResidente.push(personajeRLocation)
        }
      }
      )
    });
  }



}

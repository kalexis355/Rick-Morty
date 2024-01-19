import { Component, Input, OnInit } from '@angular/core';
import { Mortys, Result } from '../../interfaces/mortys';
import { MortysService } from '../../services/mortys.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'morty-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit{

  public personajes?:Result | null

  constructor(
    private mortyService:MortysService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.mortyService.searchPersajeUnico(id))
    )
    .subscribe( (personaje) =>{
      if(!personaje){
        return this.router.navigateByUrl('')
      }
      this.personajes=personaje
      return

     });

    }


  }



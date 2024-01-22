import { Component, OnInit } from '@angular/core';
import { MortysService } from '../../services/mortys.service';
import { Mortys, Result } from '../../interfaces/mortys';

@Component({
  selector: 'morty-by-personaje-page',
  templateUrl: './by-personaje-page.component.html',
  styleUrls: ['./by-personaje-page.component.css']
})
export class ByPersonajePageComponent implements OnInit {

  public mortys:Result[]=this.mortyService.personajes;
  public isloading:boolean = false
  public inicialValue:string=''

  constructor(private mortyService:MortysService){
  }

  ngOnInit(): void {
    this.inicialValue = this.mortyService.termino

    if(this.mortys.length ===0){
      this.searchPersonaje('')
    }else{
      this.mortys= this.mortyService.personajes
    }
  }

  searchPersonaje(nombre:string){
    this.isloading=true;
    this.mortyService.searchNamePersonaje(nombre)
    .subscribe((data:Mortys|  null) =>{
      if(data){
        this.mortys = data.results
      }else{
        this.mortys = []
      }
      this.isloading=false
    })
  }
}

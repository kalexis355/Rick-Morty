import { Component, OnInit } from '@angular/core';
import { MortysService } from '../../services/mortys.service';
import { Mortys, Result } from '../../interfaces/mortys';

@Component({
  selector: 'morty-by-personaje-page',
  templateUrl: './by-personaje-page.component.html',
  styleUrls: ['./by-personaje-page.component.css']
})
export class ByPersonajePageComponent implements OnInit {

  public mortys:Result[]=[];
  constructor(private mortyService:MortysService){
    this.searchPersonaje('')
  }

  ngOnInit(): void {

  }


  searchPersonaje(nombre:string){
    this.mortyService.searchNamePersonaje(nombre)
    .subscribe((data:Mortys) =>{
      this.mortys = data.results
      console.log(this.mortys);

    })
  }
}

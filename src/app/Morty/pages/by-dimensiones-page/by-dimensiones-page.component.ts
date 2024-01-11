import { Component } from '@angular/core';
import { MortysService } from '../../services/mortys.service';
import { MortysLocation, Result } from '../../interfaces/location';

@Component({
  selector: 'app-by-dimensiones-page',
  templateUrl: './by-dimensiones-page.component.html',
  styleUrls: ['./by-dimensiones-page.component.css'],
})
export class ByDimensionesPageComponent {

  public locations:Result[]=[]
  constructor(private MortyService:MortysService) {
    this.searchLocationMortys()
  }


  searchLocationMortys(){
    this.MortyService.searchLocation().subscribe(
      (data:MortysLocation)=>{
        this.locations=data.results
        console.log({locations:this.locations});

      }
    )
  }
}

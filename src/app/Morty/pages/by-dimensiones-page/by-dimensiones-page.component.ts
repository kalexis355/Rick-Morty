import { Component, OnInit } from '@angular/core';
import { MortysService } from '../../services/mortys.service';
import { MortysLocation, ResultLocation } from '../../interfaces/location';

@Component({
  selector: 'app-by-dimensiones-page',
  templateUrl: './by-dimensiones-page.component.html',
  styleUrls: ['./by-dimensiones-page.component.css'],
})
export class ByDimensionesPageComponent implements OnInit {

  public locations:ResultLocation[]=[]
  public isLoading:boolean=false
  constructor(private MortyService:MortysService) {
  }

  ngOnInit(): void {
    this.searchLocationMortys()
  }


  searchLocationMortys(){
    this.isLoading=true;
    this.MortyService.searchLocation().subscribe(
      (data:MortysLocation)=>{
        this.locations=data.results
        this.isLoading=false
      }
    )
  }

  searchLocationUnica(termino:string){
    this.isLoading=true
    this.MortyService.searchNameLocation(termino)
    .subscribe((location:MortysLocation|null)=>{
      if(location){
        this.locations=location.results
      }else{
        this.locations = []
      }
      this.isLoading=false
    }
    )
  }
}

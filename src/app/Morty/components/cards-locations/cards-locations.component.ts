import { Component, Input } from '@angular/core';
import { ResultLocation } from '../../interfaces/location';

@Component({
  selector: 'morty-cards-locations',
  templateUrl: './cards-locations.component.html',
  styleUrls: ['./cards-locations.component.css']
})
export class CardsLocationsComponent {

  @Input()
  public locations:ResultLocation[]=[]
}

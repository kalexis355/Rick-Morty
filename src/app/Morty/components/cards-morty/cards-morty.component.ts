import { Component, Input } from '@angular/core';
import { Mortys, Result } from '../../interfaces/mortys';

@Component({
  selector: 'morty-cards',
  templateUrl: './cards-morty.component.html',
  styleUrls: ['./cards-morty.component.css']
})
export class CardsMortyComponent {
  @Input()
  public morties:Result[]=[]

  get morty(){
    return this.morties
  }

}

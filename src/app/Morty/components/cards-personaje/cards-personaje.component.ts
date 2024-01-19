import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/mortys';

@Component({
  selector: 'morty-cards-personaje',
  templateUrl: './cards-personaje.component.html',
  styleUrls: ['./cards-personaje.component.css']
})
export class CardsPersonajeComponent {

  @Input()
  public personaje?:Result | null;
}

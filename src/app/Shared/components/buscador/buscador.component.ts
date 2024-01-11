import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @Input()
 public valorPlaceHolder:string = ''

 @Output()
 public emitirNombre:EventEmitter<string> = new EventEmitter();

 @ViewChild('valorInput')
 public valorInput!:ElementRef<HTMLInputElement>

 emitirNombreInput(){
  const valorNombre = this.valorInput.nativeElement.value;
  this.emitirNombre.emit(valorNombre);
 }
}

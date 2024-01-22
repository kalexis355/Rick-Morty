import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  private ondebunce:Subject<string> = new Subject<string>()


  @Input()
  public termino:string=''

  @Input()
  public valorPlaceHolder:string = ''

  @Output()
  public emitirNombre:EventEmitter<string> = new EventEmitter();

  @Output()
  public emitirNombrePresionando:EventEmitter<string> = new EventEmitter();

  @ViewChild('valorInput')
  public valorInput!:ElementRef<HTMLInputElement>

  ngOnInit(): void {
    this.ondebunce
    .pipe(
      debounceTime(1000)
    )
    .subscribe( value =>{
      console.log(value);

      this.emitirNombrePresionando.emit(value)
    })
  }



  emitirNombreInput(){
    const valorNombre = this.valorInput.nativeElement.value;
    this.emitirNombre.emit(valorNombre);
 }

 emitirTerminoPresionando(){
  const valorNombre = this.valorInput.nativeElement.value;
  this.ondebunce.next(valorNombre)
 }
}

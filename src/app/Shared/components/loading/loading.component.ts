import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  @Input()
  public buscando?:string
}

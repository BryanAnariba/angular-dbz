import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi Primera App Angular';
}

/*
  Decoradors
  @Input() => Permite a un componente hijo recibir informacion de un componente padre
  @OutPut() =>
*/

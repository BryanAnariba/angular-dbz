import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName (): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `Hero Name: ${ this.name } - Hero Age: ${ this.age }`;
  }

  onChangeAge (): void {
    this.age = 1000;
  }

  onChangeName (): void {
    this.name = 'Thor'.toUpperCase().trim();
  }

  onReset (): void {
    this.name = 'ironman';
    this.age = 45;
  }
}

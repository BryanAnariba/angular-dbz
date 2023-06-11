import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero?: string;
  public heroes: string[] = ['Spiderman', 'Hulk', 'Iromman', 'She Hulk'];

  onDeleteHero (): void {
    this.deletedHero = this.heroes.pop();
    console.log({ hero: this.deletedHero });
  }
}

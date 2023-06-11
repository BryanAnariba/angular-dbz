import { Component } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    constructor(
      public dbzService: DbzService
    ) { }
    
    get characters(): Character[] {
      return [...this.dbzService.characters];
    }
    
    onDeleteCharacter( uid: string ): void {
      return this.dbzService.deleteCharacterByUid( uid );
    }

    onSaveCharacter ( character: Character ): void {
      return this.dbzService.addNewCharacter(character);
    }
}

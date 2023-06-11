import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  onEmitCharacter (): void {
    //debugger;
    if ( this.character.name.trim().length === 0 ) return;

    console.log('dbz-add-character => informacion enviada por el hijo al padre: ', this.character);
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}

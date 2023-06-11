import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public deleteCharacterByUid: EventEmitter<string> = new EventEmitter();

  // @Input() => Permite a un componente hijo recibir informacion de un componente padre
  @Input()
  public characterList: Character[] = [];
  // TODO: Emitir el Id del personaje
  onDeleteCharacter(uid: string | undefined): void {
    console.log('dbz-list enviando el uid del hijo al padre: ', { uid });
    this.deleteCharacterByUid.emit(uid);
  }
}

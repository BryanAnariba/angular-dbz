import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] =  [
    {
      uid: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      uid: uuid(),
      name: 'Kakaroto',
      power: 9500
    },
    {
      uid: uuid(),
      name: 'Vegetta',
      power: 7500
    },
    {
      uid: uuid(),
      name: 'Trunks',
      power: 75000
    }
  ];
  constructor() { }

  addNewCharacter(character: Character): void {
    console.log('app-dbz-main-page => informacion recibida por el padre del hijo: ', character)
    const newCharacter: Character = {
      uid: uuid(), ...character
    }
    this.characters = [ newCharacter, ...this.characters ];
  }

  //onDeleteId(index: number): void {
  deleteCharacterByUid( uid: string ): void {
    console.log('app-dbz-main-page => informacion recibida por el padre del hijo: ', {uid});
    //this.characters.splice(index, 1);
    this.characters = this.characters.filter( (character: Character) => character.uid !== uid );
  }
}

import { Injectable } from '@angular/core';
import { Character , Sex, State } from './classes/character';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  // boolean is true when all current characters are selected
  charactersSelected: boolean;
  // array of current characters
  characters: Character[] = [
    new Character(1, 'Adrianna Skon', 'assets/img/adrianna_skon.jpg', Sex.woman),
    new Character(2, 'Mamiko', 'assets/img/mamiko.jpg', Sex.woman),
    new Character(3, 'Sexmasterka', 'assets/img/sexmasterka.jpg', Sex.woman),
  ];


  getCharacters(sex: Sex): Observable<Character[]> {
    return of(this.characters);
  }

  changeState(selectedCharacter: Character, state: State) {
    let selectedCharactersNumber = 0;

    this.characters.forEach((character) => {
      if (character !== selectedCharacter && character.state === state) {
        character.state = State.default;
      }

      // increment number of selected characters
      if (character.state !== State.default) {
        selectedCharactersNumber++;
      }
    });

    // check if all the characters are selected
    if (selectedCharactersNumber === 3) {
      this.charactersSelected = true;
    } else {
      this.charactersSelected = false;
    }
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Character , Sex, State, ICharacter } from './classes/character';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  // boolean is true when all current characters are selected
  private charactersSelected: boolean;
  // array of current characters
  private characters: Character[] = [];
  // basic url to API
  private urlApi = 'http://localhost:80/';
  // array that stores history of displayed characters
  private charactersStory: number[] = [];
  // number that stores how long is characters Story
  private charactersStroyLength = 15;

  getCharacters(sex: Sex): Observable<Character[]> {
    this.http.get<ICharacter[]>(this.urlApi + 'get_characters.php').subscribe((res) => {
      res.map((char) => {
        this.characters.push(new Character(char.id, char.name, char.imgSrc, char.sex, char.fuckVotes, char.marryVotes, char.killVotes));
        // add id of current characters to the story
        if (this.charactersStory.length < this.charactersStroyLength) {
          this.charactersStory.push(char.id);
        } else {
          this.charactersStory.shift();
          this.charactersStory.push(char.id);
        }
      });
    });
    return of(this.characters);
  }

  changeState(selectedCharacter: Character, state: State) {
    // counter of selected characters
    let selectedCharactersNumber = 0;

    this.characters.forEach((character) => {
      // change state of other characters if they are the same
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

  constructor(private http: HttpClient) { }
}

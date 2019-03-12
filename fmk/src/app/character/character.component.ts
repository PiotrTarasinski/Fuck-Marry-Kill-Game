import { Component, OnInit, Input } from '@angular/core';
import { Character, Sex, State } from '../classes/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  // character which gonna be displayed
  @Input()
  character: Character;
  // reference to the State enum
  State = State;

  constructor(private characterService: CharacterService) { }

  onSelect(character: Character, state: State): void {
    // change state of the character
    if (this.character.state !== state) {
      this.character.state = state;
      // calculate agreed percent for this character and state
      const totalVotes = this.character.fuckVotes + this.character.marryVotes + this.character.killVotes + 1;
      let selectedStateVotes = 0;
      if (state === State.fuck) {
        selectedStateVotes = this.character.fuckVotes + 1;
      }
      if (state === State.marry) {
        selectedStateVotes = this.character.marryVotes + 1;
      }
      if (state === State.kill) {
        selectedStateVotes = this.character.killVotes + 1;
      }
      this.character.agreedPercent = (selectedStateVotes / totalVotes ) * 100;
    } else {
      this.character.state = State.default;
    }
    // change state of other characters if they are the same
    this.characterService.changeState(character, state);
  }

  ngOnInit() {
  }

}

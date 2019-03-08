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
    if (this.character.state !== state) {
      this.character.state = state;
    } else {
      this.character.state = State.default;
    }
    this.characterService.changeState(character, state);
  }

  ngOnInit() {
  }

}

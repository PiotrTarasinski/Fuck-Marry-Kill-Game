import { Component, OnInit } from '@angular/core';
import { Character , Sex, State } from '../classes/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // reference to the Sex enum
  Sex = Sex;
  // boolean is true when all current characters are selected
  private charactersSelected: boolean;
  // array of current characters
  private characters: Character[];
  // selected gender
  private gender: Sex = Sex.woman;

  constructor(private characterSerive: CharacterService) { }

  getCharacters(gender: Sex): void {
    this.characterSerive.getCharacters(gender).subscribe(characters => this.characters = characters);
  }

  getCharactersSelected(): void {
    this.characterSerive.getCharactersSelected().subscribe(charactersSelected => this.charactersSelected = charactersSelected);
  }

  changeGender(): void {
    if (this.gender === Sex.woman) {
      this.gender = Sex.man;
    } else {
      this.gender = Sex.woman;
    }
  }

  ngOnInit() {
    this.getCharacters(this.gender);
    this.getCharactersSelected();
  }

}

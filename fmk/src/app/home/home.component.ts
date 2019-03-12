import { Component, OnInit } from '@angular/core';
import { Character , Sex, State } from '../classes/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // array of current characters
  characters: Character[];
  // selected gender
  gender: Sex = Sex.woman;

  constructor(private characterSerive: CharacterService) { }

  getCharacters(gender: Sex): void {
    this.characterSerive.getCharacters(gender).subscribe(characters => this.characters = characters);
  }

  ngOnInit() {
    this.getCharacters(this.gender);
  }

}

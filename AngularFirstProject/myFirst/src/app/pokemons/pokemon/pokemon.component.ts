import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  constructor() {}
  id: Number;
  hp: Number;
  cp: Number;
  name: String;
  picture: String;
  types: Array<String>;
  created: Date;
}

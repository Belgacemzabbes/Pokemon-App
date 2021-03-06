import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],

})
export class ListPokemonComponent implements OnInit {
  pokemons: PokemonComponent[] = null;
  constructor(private router: Router, private pokemonService: PokemonService ) {}
  ngOnInit() : void{
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons)
  }
    selectPokemon(pokemon: PokemonComponent) {
    // alert('You just selected ' + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
  // onClick() {
  //   console.log('click!');
  // }
  // onKey(value: String) {
  //   this.value = `Hello ${value}!`;
  // }
}

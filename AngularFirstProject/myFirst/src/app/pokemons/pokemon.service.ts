import { Injectable } from '@angular/core';
import {  POKEMONS} from './mockPokemon'
import {PokemonComponent } from './pokemon/pokemon.component'

@Injectable()
export class PokemonService {

    // Retourne tous les pokémons
    getPokemons(): PokemonComponent[] {
      return POKEMONS;
    }
      
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): PokemonComponent {
      let pokemons = this.getPokemons();
      
      for(let index = 0; index < pokemons.length; index++) {
        if(id === pokemons[index].id) {
          return pokemons[index];
        }
      }
    }
}

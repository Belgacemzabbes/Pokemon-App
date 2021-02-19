import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonRoutingModule} from './Pokemons-routing'
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component'
import {ListPokemonComponent} from './list-pokemon/list-pokemon.component'
import {BorderCardDirective} from './border-card.directive'
import {PokemonTypeColorPipe} from './pokemon-type-color.pipe'

@NgModule({
  declarations: [
    DetailPokemonComponent,
    ListPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  providers:[]
})
export class PokemonsModule { }

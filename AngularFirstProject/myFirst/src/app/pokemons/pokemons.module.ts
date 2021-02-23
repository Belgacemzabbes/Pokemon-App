import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonRoutingModule} from './Pokemons-routing'
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component'
import {ListPokemonComponent} from './list-pokemon/list-pokemon.component'
import {BorderCardDirective} from './border-card.directive'
import {PokemonTypeColorPipe} from './pokemon-type-color.pipe'
import {PokemonService} from './pokemon.service'
import {FormsModule} from '@angular/forms'
import {EditPokemonComponent} from './edit-pokemon.component'
import {PokemonFormComponent} from './pokemon-form.component' 
import {PokemonSearchComponent} from './search-pokemon.component'
import {LoaderComponent} from '../loader.component'
import { AuthGuard} from '../auth-guard.service'
@NgModule({
  declarations: [
    DetailPokemonComponent,
    ListPokemonComponent,
    EditPokemonComponent,
    PokemonFormComponent,
    PokemonSearchComponent,
    LoaderComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers:[PokemonService, AuthGuard]
})
export class PokemonsModule { }

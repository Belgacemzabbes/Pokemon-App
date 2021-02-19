import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonService} from '../pokemon.service'

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
  pokemon: PokemonComponent = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
   
        this.pokemon = this.pokemonService.getPokemon(id);
     
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }
  goEdit(pokemon: PokemonComponent) : void {
    let link =['/pokemon/edit', pokemon.id];
    this.router.navigate(link)
  }
}

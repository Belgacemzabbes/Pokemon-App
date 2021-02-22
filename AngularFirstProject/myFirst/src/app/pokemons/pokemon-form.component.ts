import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonService } from './pokemon.service';
import { ThrowStmt } from '@angular/compiler';
  
@Component({
  selector: 'pokemon-form',
  templateUrl:'./pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  
    @Input() pokemon: PokemonComponent; // propriété d'entrée du composant
    types: Array<String>; // types disponibles pour un pokémon : 'Eau', 'Feu', etc ...
    constructor(
        private pokemonService: PokemonService,
        private router: Router) { }
  
    ngOnInit() {
        // Initialisation de la propriété types
        this.types = this.pokemonService.getPokemonTypes();
    }
  
    // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
    hasType(type: string): boolean {
        let index = this.pokemon.types.indexOf(type);
        if (index > -1) return true;
        return false;
    }
  
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
    selectType($event: any, type: string): void {
        let checked = $event.target.checked;
        if (checked) {
            this.pokemon.types.push(type);
        } else {
            let index = this.pokemon.types.indexOf(type);
            if (index > -1) {
                this.pokemon.types.splice(index, 1);
            }
        }
    }
  
    // Valide le nombre de types pour chaque pokémon
    isTypesValid(type: string): boolean {
        if (this.pokemon.types.length === 1 && this.hasType(type)) {
            return false;
        }
        if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
            return false;
        }
  
        return true;
    }
  
    // La méthode appelée lorsque le formulaire est soumis.
    onSubmit(): void {
        console.log("Submit form !");
        this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(( )=> this.goBack());
    }
  
    goBack(): void{
        let link = ['/pokemon', this.pokemon.id];
        this.router.navigate(link);    }
}

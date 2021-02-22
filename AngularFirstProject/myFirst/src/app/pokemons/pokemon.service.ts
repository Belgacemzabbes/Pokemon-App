import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  POKEMONS} from './mockPokemon'
import {PokemonComponent } from './pokemon/pokemon.component'
import {catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient){}

  private pokemonsUrl = 'api/pokemons';

  private log (log: string){
    console.info(log);
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);      
    }
  }
    // Retourne tous les pokémons
    getPokemons(): Observable<PokemonComponent[]> {
      return this.http.get<PokemonComponent[]>(this.pokemonsUrl).pipe(tap(_=> this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`, [])))

    }
      
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<PokemonComponent> {
      const url = `${this.pokemonsUrl}/${id}`;
      return this.http.get<PokemonComponent>(url).pipe(tap(_=> this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<PokemonComponent>(`getPokemon id=${id}`)))
      }
    
      deletePokemon(pokemon: PokemonComponent): Observable<PokemonComponent>{
        const url = `$${this.pokemonsUrl}/${pokemon.id}`;
        const httpOptions = {
          headers: new HttpHeaders({'ContentType': 'application/json'})
        }

        return this.http.delete<PokemonComponent>(url, httpOptions).pipe(
          tap(_=> this.log(`deleted pokemon id=${pokemon.id}`)),
          catchError(this.handleError<PokemonComponent>('deletePokemon'))
        )
      }
    updatePokemon (pokemon: PokemonComponent): Observable<PokemonComponent>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-type': 'application/json'})
      }
      return this.http.put(this.pokemonsUrl, pokemon, httpOptions).
      pipe(tap(_=>this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatedPokemon')))
    }

    searchPokemons(term: string): Observable<PokemonComponent[]>{
      if( !term.trim()){return of([])}

      return this.http.get<PokemonComponent[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
        tap(_=> this.log(`found pokemons matching "${term}"`)),
        catchError(this.handleError<PokemonComponent[]>('searchPokemons', [])));
        
    }
    

    getPokemonTypes() : String[]{
      return ["Plante", 'Feu', 'Eau', "Insect", "Normal", "Electrik", "Poisson", "Fée", "Vol"]
    }
}

import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

export class PokemonServiceStub {
  getPokemon(): Observable<Pokemon> {
    return of({
      id: 1,
      name: 'charmander',
    });
  }
}

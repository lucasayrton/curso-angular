import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { PokemonService } from 'src/app/core/services/pokemon.service';

// https://medium.com/@richardleecba/pensando-reativamente-91361cfdccc5
// https://blog.andrefaria.com/programacao-reativa-reactive-programming
// https://medium.com/digitalproductsdev/arquitetura-bff-back-end-for-front-end-13e2cbfbcda2
// https://vinioolvrs.medium.com/conhe%C3%A7a-os-princ%C3%ADpios-dry-kiss-e-yagni-9fc4ab46b0b9

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  nomePokemon = new FormControl('');
  sub!: Subscription;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.sub = fromEvent(document.getElementById('nome-pokemon')!, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        debounceTime(1000),
        filter((res) => res.length > 2),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.getPokemonName();
      });
  }

  public async getPokemon(): Promise<void> {
    this.pokemonService.getPokemon('ditto').subscribe((res) => {
      console.log('subscribe');
      console.log(res);
    });

    const resp = await this.pokemonService.getPokemon('ditto').toPromise();
    console.log('async/await');
    console.log(resp);
  }

  public async getPokemonError(): Promise<void> {
    this.pokemonService.getPokemon('ditt').subscribe((res) => {
      console.log('subscribe');
      console.log(res);
    });
  }

  public async getPokemonName(): Promise<void> {
    this.pokemonService.getPokemon(this.nomePokemon.value).subscribe((res) => {
      console.log(res);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.scss'],
})
export class TestesComponent implements OnInit {
  title = 'Componente de Testes';
  form!: FormGroup;
  enviado!: boolean;
  pokemon!: Pokemon;

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.pokemonService.getPokemon('charmander').subscribe((res) => {
      this.pokemon = res;
    });
  }

  private createForm(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      cpjCnpj: ['', [Validators.required]],
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        },
      ],
    });
  }

  public enviar(): void {
    if (this.form.invalid) {
      this.enviado = false;
      return;
    }

    this.enviado = true;
  }
}

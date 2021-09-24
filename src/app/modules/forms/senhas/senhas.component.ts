import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-senhas',
  templateUrl: './senhas.component.html',
  styleUrls: ['./senhas.component.scss'],
})
export class SenhasComponent implements OnInit {
  @Input() formPass!: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  public entrar(): void {
    if (this.formPass.invalid) {
      console.log('Senhas diferentes');
      return;
    }

    console.log('Entrou!');
  }
}

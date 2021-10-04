import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  mesmaTitularidade = new FormControl(false);
  form!: FormGroup;
  formPass!: FormGroup;
  tiposDeConta = [
    {
      value: 1,
      name: 'Conta Corrente',
    },
    {
      value: 2,
      name: 'Conta Poupança',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      tipoConta: [1, [Validators.required]],
      nome: ['', [Validators.required]],
      cpjCnpj: ['', [Validators.required]],
      agencia: ['', [Validators.required]],
      conta: ['', [Validators.required]],
      digito: ['', [Validators.required]],
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        },
      ],
    });

    this.formPass = this.fb.group(
      {
        password: ['', [Validators.required]],
        passwordConfirm: ['', [Validators.required]],
      },
      { validators: [this.confirmacaoDeSenha] }
    );
  }

  private confirmacaoDeSenha(g: FormGroup) {
    return g.get('password')?.value === g.get('passwordConfirm')?.value
      ? null
      : { mismatch: true };
  }

  public changeCheckbox(): void {
    console.log(this.mesmaTitularidade.value);

    if (!this.mesmaTitularidade.value) {
      this.form.get('nome')?.setValidators(Validators.required);
      this.form.get('cpjCnpj')?.setValidators(Validators.required);
    } else {
      this.form.get('nome')?.clearValidators();
      this.form.get('cpjCnpj')?.clearValidators();
    }

    this.form.get('nome')?.updateValueAndValidity();
    this.form.get('cpjCnpj')?.updateValueAndValidity();
  }

  public getEmailErrorMessage(): string {
    if (this.form.get('email')?.hasError('required')) {
      return 'Campo email é obrigatório';
    }

    return this.form.get('email')?.hasError('email') ? 'Email inválido' : '';
  }

  public enviar(): void {
    if (this.form.invalid) {
      console.log('Formulário inválido.');
      return;
    }

    console.log('Enviado!');
  }
}

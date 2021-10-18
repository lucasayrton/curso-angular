import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { PokemonServiceStub } from 'src/app/core/services/pokemon.service.stub';

import { TestesComponent } from './testes.component';

describe('TestesComponent', () => {
  let component: TestesComponent;
  let fixture: ComponentFixture<TestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestesComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: PokemonService,
          useClass: PokemonServiceStub,
        },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve possuir o título "Componente de Testes"', () => {
    expect(component.title).toEqual('Componente de Testes');
  });

  it('deve possuir o título dentro do h1 "Componente de Testes"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Componente de Testes'
    );
    expect(compiled.querySelector('h1').textContent).not.toContain(
      'Componente de Testes X'
    );
  });

  it('deve rejeitar o envio do form', () => {
    component.enviar();
    expect(component.enviado).not.toBeTruthy();
  });

  it('deve chamar "enviar" ao clicar no botão', () => {
    spyOn(component, 'enviar');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.enviar).toHaveBeenCalled();
  });

  it('form deve ser inválido com valores vazios', () => {
    component.form.get('nome')?.setValue('');
    component.form.get('cpjCnpj')?.setValue('');
    component.form.get('email')?.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('form deve ser inválido com email inválido', () => {
    component.form.get('nome')?.setValue('Teste');
    component.form.get('cpjCnpj')?.setValue('0000000');
    component.form.get('email')?.setValue('teste');
    expect(component.form.valid).toBeFalsy();
  });

  it('form deve ser válido', () => {
    component.form.get('nome')?.setValue('Teste');
    component.form.get('cpjCnpj')?.setValue('0000000');
    component.form.get('email')?.setValue('teste@teste.com');
    expect(component.form.valid).toBeTruthy();
  });

  it('deve buscar pokemon de id 1', () => {
    expect(component.pokemon.id).toBe(1);
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from './compras/compras.component';
import { SharedModule } from '../shared/shared.module';
import { PipesDiretivasComponent } from './pipes-diretivas/pipes-diretivas.component';
import { PipesModule } from '../core/pipes/pipes.module';
import { DirectivesModule } from '../core/directives/directives.module';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SenhasComponent } from './forms/senhas/senhas.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    ComprasComponent,
    PipesDiretivasComponent,
    FormsComponent,
    SenhasComponent,
    ServicesComponent,
  ],
  imports: [
    PipesModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ModulesModule {}

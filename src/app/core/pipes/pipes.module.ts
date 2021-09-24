import { NgModule } from '@angular/core';
import { CpfCnpjPipe } from './cpf-cnpj.pipe';

@NgModule({
  declarations: [CpfCnpjPipe],
  exports: [CpfCnpjPipe],
})
export class PipesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { ListaComponent } from './lista/lista.component';
import { ItemComponent } from './item/item.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ListaComponent, CarrinhoComprasComponent, ItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ListaComponent, CarrinhoComprasComponent, ItemComponent],
})
export class ComponentsModule {}

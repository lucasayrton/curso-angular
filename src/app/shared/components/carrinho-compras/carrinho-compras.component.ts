import { Component, Input } from '@angular/core';
import { Item } from '../item/item.model';
import { CarrinhoCompraService } from './carrinho-compras.service';
import { ListaCarrinho } from './lista-carrinho.model';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.scss'],
})
export class CarrinhoComprasComponent {
  @Input() public set lista(lista: ListaCarrinho[]) {
    const listaTemp = lista.map((l) => {
      const valorTotal = l.item.valor * l.quantidade;
      return {
        item: l.item,
        quantidade: l.quantidade,
        valorTotal,
      } as ListaCarrinho;
    });

    this._lista = [...listaTemp];
  }
  public get lista(): ListaCarrinho[] {
    return this._lista;
  }

  private _lista: ListaCarrinho[] = [];

  constructor(private carrinhoCompraService: CarrinhoCompraService) {}

  public adicionarItem(item: Item): void {
    this.carrinhoCompraService.adicionarItem(item);
  }

  public removerItem(itemId: string): void {
    this.carrinhoCompraService.removerItem(itemId);
  }
}

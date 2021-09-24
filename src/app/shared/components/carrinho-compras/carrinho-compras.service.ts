import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';
import { ListaCarrinho } from './lista-carrinho.model';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoCompraService {
  listaCarrinho: ListaCarrinho[] = [];

  public adicionarItem(item: Item): void {
    const itemTemp = this.listaCarrinho.find((l) => l.item.id === item.id);

    if (!itemTemp) {
      this.listaCarrinho = [...this.listaCarrinho, { item, quantidade: 1 }];
      return;
    }

    itemTemp.quantidade++;
    this.listaCarrinho = [...this.listaCarrinho];
  }

  public removerItem(itemId: string): void {
    const itemTemp = this.listaCarrinho.find((l) => l.item.id === itemId);

    if (itemTemp) {
      if (itemTemp?.quantidade === 1) {
        this.listaCarrinho = this.listaCarrinho.filter(
          (l) => l.item.id !== itemId
        );
        return;
      }

      itemTemp.quantidade--;
      this.listaCarrinho = [...this.listaCarrinho];
    }
  }
}

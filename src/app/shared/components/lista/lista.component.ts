import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CarrinhoCompraService } from '../carrinho-compras/carrinho-compras.service';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnChanges {
  @Input() itens: Item[] = [];
  @Input() ois: string[] = [];

  constructor(private carrinhoCompraService: CarrinhoCompraService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes && changes.ois) {
      console.log('ngOnChanges do componente de Lista');
    }
  }

  public adicionar(item: Item): void {
    this.carrinhoCompraService.adicionarItem(item);
  }
}

import { Item } from '../item/item.model';

export interface ListaCarrinho {
  item: Item;
  quantidade: number;
  valorTotal?: number;
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: Item = new Item();
  @Output() onAdicionarItem = new EventEmitter<Item>();

  constructor() {}

  public adicionar(item: Item): void {
    this.onAdicionarItem.emit(item);
  }
}

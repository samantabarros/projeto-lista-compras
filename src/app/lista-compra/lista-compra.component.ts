import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './item-lista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compra',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compra.component.html',
  styleUrl: './lista-compra.component.scss'
})
export class ListaCompraComponent {
  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);
    //console.table(this.lista);

    this.item = '';
  }
}

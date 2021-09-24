import { AfterViewInit } from '@angular/core';
import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CarrinhoComprasComponent } from 'src/app/shared/components/carrinho-compras/carrinho-compras.component';
import { CarrinhoCompraService } from 'src/app/shared/components/carrinho-compras/carrinho-compras.service';
import { Item } from 'src/app/shared/components/item/item.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
})
export class ComprasComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ViewChild('nomeInput') nomeInput!: ElementRef;
  // @ViewChild(CarrinhoComprasComponent)
  // carrinhoComprasComponent!: CarrinhoComprasComponent;

  itens: Item[] = [];
  ois: string[] = [];

  constructor(public carrinhoCompraService: CarrinhoCompraService) {}

  ngOnInit(): void {
    console.log('ngOnInit do componente de Compras');
    // this.nomeInput.nativeElement.value = 'Lucas Ayrton';
    this.itens = [
      {
        id: 'f1ewr51fe56rg',
        nome: 'Computador',
        urlImg:
          'https://a-static.mlcdn.com.br/618x463/computador-com-monitor-led-intel-dual-core-2-58gb-4gb-500gb-easypc-smart/3greentechnology/22037/76e756957e878dce1b87f90db417014c.jpg',
        valor: 5300,
      },
      {
        id: 'b1rt14reg4',
        nome: 'Monitor',
        urlImg:
          'https://images.kabum.com.br/produtos/fotos/113016/monitor-w-led-philips-27-full-hd-ips-hdmi-displayport-bordas-ultrafinas-272v8a_1589830961_g.jpg',
        valor: 2000,
      },
      {
        id: '1t7hj15tyh',
        nome: 'Teclado',
        urlImg:
          'https://a-static.mlcdn.com.br/618x463/teclado-multimidia-usb-slim-multilaser/magazineluiza/217169900/1ba5340e23aa18ad7031a3dc083e4d5a.jpg',
        valor: 100,
      },
      {
        id: '86sdfv74e89r',
        nome: 'Mouse',
        urlImg:
          'https://i.dell.com/das/xa.ashx/global-site-design%20WEB/d70614e4-5064-0eb1-6bbb-509d14ca96dc/1/OriginalPng?id=Dell/Product_Images/Peripherals/Input_Devices/Dell/Mouse/wm126/relativesized/dell-wm126-wirelesss-mose-top-relativesized-500.jpg',
        valor: 70,
      },
      {
        id: '86sdfv74e89r',
        nome: 'Mouse',
        urlImg:
          'https://i.dell.com/das/xa.ashx/global-site-design%20WEB/d70614e4-5064-0eb1-6bbb-509d14ca96dc/1/OriginalPng?id=Dell/Product_Images/Peripherals/Input_Devices/Dell/Mouse/wm126/relativesized/dell-wm126-wirelesss-mose-top-relativesized-500.jpg',
        valor: 70,
      },
      {
        id: '86sdfv74e89r',
        nome: 'Mouse',
        urlImg:
          'https://i.dell.com/das/xa.ashx/global-site-design%20WEB/d70614e4-5064-0eb1-6bbb-509d14ca96dc/1/OriginalPng?id=Dell/Product_Images/Peripherals/Input_Devices/Dell/Mouse/wm126/relativesized/dell-wm126-wirelesss-mose-top-relativesized-500.jpg',
        valor: 70,
      },
      {
        id: '86sdfv74e89r',
        nome: 'Mouse',
        urlImg:
          'https://i.dell.com/das/xa.ashx/global-site-design%20WEB/d70614e4-5064-0eb1-6bbb-509d14ca96dc/1/OriginalPng?id=Dell/Product_Images/Peripherals/Input_Devices/Dell/Mouse/wm126/relativesized/dell-wm126-wirelesss-mose-top-relativesized-500.jpg',
        valor: 70,
      },
    ];
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit do componente de Compras');
    // this.nomeInput.nativeElement.value = 'Lucas Ayrton';
    // console.log(
    //   'Acessando lista do componente filho:',
    //   this.carrinhoComprasComponent.lista
    // );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy do componente de Compras');
  }

  public adicionar(): void {
    /*
      -- Adicionando item na lista no padrão mutável --
      Adicionando um item na lista via push podemos perceber que o item é adicionado no array porém o OnChanges
      do componente filho não é ativado.
    */
    this.ois.push('oi');
    console.log('Adicionando oi na lista: ', this.ois);

    /*
      -- Adicionando item na lista no padrão imutável --
      Para que o OnChanges seja acionado precisamos criar um novo array, a forma mais prática para se fazer isso
      é utilizando o spread operator (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
    */
    // this.ois = [...this.ois, 'oi'];

    /*
      Esse é um caso clássico para vermos funcionando a imutabilidade, muitas vezes nos deparamos com algum problema de algo
      não estar sendo atualizado ou não estar acionando algo.
    */
  }
}

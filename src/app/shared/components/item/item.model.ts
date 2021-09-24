export class Item {
  id: string;
  urlImg: string;
  nome: string;
  valor: number;

  constructor(
    id: string = '',
    urlImg: string = '',
    nome: string = '',
    valor: number = 0
  ) {
    this.id = id;
    this.urlImg = urlImg;
    this.nome = nome;
    this.valor = valor;
  }
}

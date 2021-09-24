import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-diretivas',
  templateUrl: './pipes-diretivas.component.html',
  styleUrls: ['./pipes-diretivas.component.scss'],
})
export class PipesDiretivasComponent {
  dataAtual = new Date();
  promise!: Promise<string>;

  constructor() {
    this.promise = this.getPromise();
    2;
  }

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise finalizada!'), 3000);
    });
  }

  canDeactivate(): boolean {
    return confirm('Deseja sair da rota?');
  }
}

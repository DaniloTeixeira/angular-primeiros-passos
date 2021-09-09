import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from './services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  ngOnInit(): void {
    this.limpar()
  }

  concatNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }
    if (numConcat === '.' || numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  addNumero(numero: string): void {
    this.operacao === null ? this.numero1 = this.concatNumero(this.numero1, numero)
      : this.numero2 = this.concatNumero(this.numero2, numero)
  }

  definirOperacao(operacao: string) {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }
    {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcularResultado() {
    if (this.numero2 === null) {
      return
    }
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  get display() {
    if (this.resultado !== null) {
      return this.resultado;
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }
}

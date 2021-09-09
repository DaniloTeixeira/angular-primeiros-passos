import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  calcular(n1: number, n2: number, operacao: string): number {
    let result: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        result = n1 + n2;
        break;
      case CalculadoraService.SUBTRACAO:
        result = n1 - n2;
        break;
      case CalculadoraService.DIVISAO:
        result = n1 / n2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        result = n1 * n2;
        break;
      default:
        result = 0;
    }
    return result;
  }
}
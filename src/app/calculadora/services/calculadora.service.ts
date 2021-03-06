/**
 * Serviço responsável por executar as operações
 * da calculadora.
 * 
 * @author Diego Minelli<diego.minelli@hotmail.com>
 * @since 1.0.0
 */



import { Injectable } from '@angular/core';

@Injectable()
  
export class CalculadoraService {

  /*Define as constantes utilizadas
    para definir as operações de cálculo */

  static readonly SOMA: string = '+';  
  static readonly SUBSTRAÇÃO: string = '-';  
  static readonly DIVISÃO: string = '/';  
  static readonly MULTIPLICAÇÃO: string = '*';  

  constructor() { }

  /** 
   * Método que calcula uma operação matemática dado
   * dois números
   * Suporta as operações soma, subtração, divisão
   * e multiplicação.
   * 
   *@param num1 number
   *@param num2 number
   *@param operacao string Operação a ser executada
   *@return number Resultado da operação 
  */ 

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //armazena o resultado da operação 

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBSTRAÇÃO:
        resultado = num1 - num2;
      break; 
      case CalculadoraService.DIVISÃO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICAÇÃO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }
    
    return resultado;
  }

}












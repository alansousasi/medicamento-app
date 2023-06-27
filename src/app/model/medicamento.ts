import { Laboratorio } from './laboratorio';
export class Medicamento {
  id: string;
  nome: string;
  laboratorio: string;
  dataAtualizacao: number;

  constructor(id: string, nome: string, laboratorio: string, dataAtualizacao: number) {
    this.id = id;
    this.nome = nome;
    this.laboratorio = laboratorio;
    this.dataAtualizacao = dataAtualizacao;
  }

  public static clone(med: Medicamento) {
    let m: Medicamento = new Medicamento(med.id, med.nome,med.laboratorio, med.dataAtualizacao);
    return m;
  }
}

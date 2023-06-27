export class MedicamentoLaboratorio {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;

  }

  public static clone(lab: MedicamentoLaboratorio) {
    let m: MedicamentoLaboratorio = new MedicamentoLaboratorio(lab.nome);
    return m;
  }
}

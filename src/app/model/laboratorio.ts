export class Laboratorio {
  id: string;
  nome: string;

  constructor(id: string, nome: string) {
    this.id = id;
    this.nome = nome;

  }

  public static clone(lab: Laboratorio) {
    let l: Laboratorio = new Laboratorio(lab.id, lab.nome);
    return l;
  }
}

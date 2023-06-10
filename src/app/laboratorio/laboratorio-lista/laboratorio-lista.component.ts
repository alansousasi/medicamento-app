import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface Laboratorio{
  id: number;
  nome: string;
}

@Component({
  selector: 'app-laboratorio-lista',
  templateUrl: './laboratorio-lista.component.html',
  styleUrls: ['./laboratorio-lista.component.css']
})
export class LaboratorioListaComponent implements OnInit{
  id!: number;
  nome!: string;
  laboratorios: Laboratorio[];

  constructor(public router: Router){
    this.laboratorios = [
      {id: 1, nome: 'JHONSON'},
      {id: 2 ,nome: 'EMS'},
      {id: 3 ,nome: 'BAYER'}
    ]
  }

  edit(laboratorio: { id: any; nome: any;}): void {

    this.router.navigate(['/laboratorio/cadastro', laboratorio.nome]);
  }

  delete(laboratorio: { id: any; nome: any; }): void {

    let dialog = confirm("Deseja realmente excluir o laboratório?");

    if (dialog) {

      for (let i = 0; i < this.laboratorios.length; i++) {

        if (this.laboratorios[i].id == laboratorio.id) {
          this.laboratorios.splice(i,1);
        }
      }
    }
  }

  ngOnInit(): void {
  }
}


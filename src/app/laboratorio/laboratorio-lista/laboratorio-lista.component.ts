import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Laboratorio } from 'src/app/model/laboratorio';
import { Shared } from 'src/app/utils/shared';
import { LaboratorioStorageService } from '../laboratorio-cadastro/laboratorio-storage.service';
@Component({
  selector: 'app-laboratorio-lista',
  templateUrl: './laboratorio-lista.component.html',
  styleUrls: ['./laboratorio-lista.component.css']
})
export class LaboratorioListaComponent implements OnInit{
  id!: number;
  nome!: string;
  laboratorios!: Laboratorio[];
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(public router: Router,private labService: LaboratorioStorageService){
  }

  edit(laboratorio: { id: any; nome: any;}): void {

    this.router.navigate(['/laboratorio/cadastro', laboratorio.id, laboratorio.nome]);
  }

  delete(laboratorio: { id: any; nome: any; }): void {

    let dialog = confirm("Deseja realmente excluir o laboratório?");

    if (dialog) {

      let response: boolean = this.labService.delete(laboratorio);
      this.isShowMessage = true;
      this.isSuccess = response;
      if (response) {
        this.message = 'Laboratório excluído!';
      } else {
        this.message = 'Opps! O Laboratório não pode ser excluído!';
      }
      this.laboratorios = this.labService.getLabotorios();

    }
  }

  ngOnInit(): void {

    Shared.initializeWebStorage();
    this.laboratorios = this.labService.getLabotorios();
  }
}


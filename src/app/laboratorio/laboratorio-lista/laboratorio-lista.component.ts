import { LaboratorioService } from './../../service/laboratorio.service';
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

  constructor(public router: Router,private _labService: LaboratorioService){
    this.list();
  }

  edit(laboratorio: { id: any; nome: any;}): void {

    this.router.navigate(['/laboratorio/cadastro', laboratorio.id]);
  }

  delete(laboratorio: { id: any; nome: any; }): void {

    let dialog = confirm("Deseja realmente excluir o laboratório?");

    if (dialog) {
      let self = this;
      let promise = new Promise(function(myResolve, myReject) {
        self._labService.delete(laboratorio.id).subscribe(
          // dando certo
          laboratorio => {
            myResolve("OK");
          },
          // dando errando chama o erro
          err => {
            myReject("Error");
          }
        );
      });

      promise.then(
        function(value) {

          for (let i = 0; i < self.laboratorios.length; i++) {

            if (self.laboratorios[i].id == laboratorio.id) {
              self.laboratorios.splice(i, 1);
            }
          }

          self.isShowMessage = true;
          self.isSuccess = true;
          self.message = 'Laboratório excluído!';
        },
        function(error) {
          console.log("Erro ao excluir receita!")

          self.isShowMessage = true;
          self.isSuccess = true;
          self.message = 'Error ao excluir laboratório!';

        }
      );

    }
  }

  list(){

    let self = this;
    let promise = new Promise(function(myResolve, myReject) { //uso do promise
      self._labService.getLaboratorios().subscribe(
        list => {
          self.laboratorios = list.map(
            item=>{
              return new Laboratorio(
                item.id,
                item.nome
              );
            }
          );
          myResolve("Ok");
        },
        err => {
          myReject("Error");
        }
      );
    });
    promise.then(
      function(value) {
        console.log("Sucesso ao consumir a API");
      },
      function(error) {
        console.log("Erro ao consumir a API!")
      }
    );

  }

  ngOnInit(): void {

  }
}


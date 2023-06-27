import { MedicamentoService } from './../../service/medicamento.service';
import { LaboratorioService } from 'src/app/service/laboratorio.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/model/laboratorio';
import { Medicamento } from 'src/app/model/medicamento';

@Component({
  selector: 'app-medicamento-lista',
  templateUrl: './medicamento-lista.component.html',
  styleUrls: ['./medicamento-lista.component.css']
})
export class MedicamentoListaComponent implements OnInit{
  id!: number;
  nome!: string;
  medicamentos!: Medicamento[];
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(public router: Router,private _medService : MedicamentoService){
    this.list();
  }

  edit(medicamento: { id: any; nome: any;}): void {

    this.router.navigate(['/medicamento/cadastro', medicamento.id]);
  }

  delete(medicamento: { id: any; nome: any; }): void {

    let dialog = confirm("Deseja realmente excluir o medicamento?");

    if (dialog) {
      let self = this;
      let promise = new Promise(function(myResolve, myReject) {
        self._medService.delete(medicamento.id).subscribe(
          // dando certo
          medicamento => {
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

          for (let i = 0; i < self.medicamentos.length; i++) {

            if (self.medicamentos[i].id == medicamento.id) {
              self.medicamentos.splice(i, 1);
            }
          }

          self.isShowMessage = true;
          self.isSuccess = true;
          self.message = 'Medicamento excluído!';
        },
        function(error) {
          console.log("Erro ao excluir receita!")

          self.isShowMessage = true;
          self.isSuccess = true;
          self.message = 'Error ao excluir Medicamento!';

        }
      );

    }
  }

  list(){

    let self = this;
    let promise = new Promise(function(myResolve, myReject) { //uso do promise
      self._medService.getMedicamentos().subscribe(
        list => {
          self.medicamentos = list.map(
            item=>{
              return new Medicamento(
                item.id,
                item.nome,
                item.laboratorio,
                item.dataAtualizacao
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

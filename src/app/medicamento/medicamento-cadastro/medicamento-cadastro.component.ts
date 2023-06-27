import { MedicamentoLaboratorio } from './../../model/medicamentoLaboratorio';
import { NgForm } from '@angular/forms';
import { MedicamentoService } from './../../service/medicamento.service';
import { LaboratorioService } from 'src/app/service/laboratorio.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';
import { v4 as uuidv4 } from 'uuid';
import { Laboratorio } from 'src/app/model/laboratorio';

@Component({
  selector: 'app-medicamento-cadastro',
  templateUrl: './medicamento-cadastro.component.html',
  styleUrls: ['./medicamento-cadastro.component.css']
})
export class MedicamentoCadastroComponent implements OnInit{

  @ViewChild('form') form !: NgForm;

  medicamento!: Medicamento;
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;
  laboratorios!: MedicamentoLaboratorio[];

  constructor(public route: ActivatedRoute, private _labService: LaboratorioService, private _medService: MedicamentoService) {

  }

  ngOnInit(): void {

    this.carregaLaboratorios();

    let id = this.route.snapshot.params['id'];

    if(id != '' && id !== undefined){
      this.getMedicamento(id);
     }else{
      this.medicamento = new Medicamento('','','',new Date().getTime());
     }

  }

  carregaLaboratorios(){

    let self = this;
    let promise = new Promise(function(myResolve, myReject) { //uso do promise
      self._labService.getLaboratorios().subscribe(
        list => {
          self.laboratorios = list.map(
            item=>{
              console.log(item.nome);
              return new MedicamentoLaboratorio(
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

  getMedicamento(id: string){
    this._medService.getMedicamentos()
    .subscribe(
      med => {
        med.forEach(item => {
          if (item.id == id){
            this.medicamento = new Medicamento(
              item.id,
              item.nome,
              item.laboratorio,
              item.dataAtualizacao)
          }
        });
      }
    )
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.medicamento.id != '') {
      this.update();
      this.isShowMessage = true;
      this.isSuccess = true;
    } else {
      this.medicamento.id = uuidv4();
      this.save();
      this.isShowMessage = true;
      this.isSuccess = true;
    }
    this.form.reset();
  }

  save(){
      let self = this;
      let myPromise = new Promise(function(myResolve, myReject) {
        self._medService.save(self.medicamento).subscribe(

          lab => {
            myResolve("OK");
          },
          err => {
            myReject("Error");
          }
        );
      });

      myPromise.then(
        function(value) {
          self.message = 'Cadastro realizado com sucesso!';
          self.medicamento = new Medicamento('', '','',new Date().getTime());
        },
        function(error) {
          console.log("Erro ao cadastrar!")
        }
      );
    }

    update(){

      let self = this;
      self.medicamento.dataAtualizacao = new Date().getTime();
      let myPromise = new Promise(function(myResolve, myReject) {
        self._medService.update(self.medicamento.id,self.medicamento).subscribe(
        lab => {
          myResolve("OK");
        },
        err => {
          myReject("Error");
        }
      );
    });

    myPromise.then(
      function(value) {
        self.message = "Atualização realizada com sucesso!";
        self.medicamento = new Medicamento('', '','',new Date().getTime());

      },
      function(error) {
        console.log("Erro ao atualizar!")
      }
    );

    }


}

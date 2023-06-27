import { Laboratorio } from './../../model/laboratorio';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { LaboratorioStorageService } from './laboratorio-storage.service';
import { Shared } from 'src/app/utils/shared';
import { v4 as uuidv4 } from 'uuid';
import { LaboratorioService } from 'src/app/service/laboratorio.service';

@Component({
  selector: 'app-laboratorio-cadastro',
  templateUrl: './laboratorio-cadastro.component.html',
  styleUrls: ['./laboratorio-cadastro.component.css']
})
export class LaboratorioCadastroComponent implements OnInit{
  @ViewChild('form') form !: NgForm;

  laboratorio!: Laboratorio;
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(public route: ActivatedRoute, private _labService: LaboratorioService) {

  }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];

     if(id != '' && id !== undefined){
      this.getLaboratorio(id);
     }else{
      this.laboratorio = new Laboratorio('', '');
     }

  }

  getLaboratorio(id: string){
    this._labService.getLaboratorios()
    .subscribe(
      lab => {
        lab.forEach(item => {
          if (item.id == id){
            this.laboratorio = new Laboratorio(
              item.id,
              item.nome)
          }
        });
      }
    )
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.laboratorio.id != '') {
      this.update();
      this.isShowMessage = true;
      this.isSuccess = true;
    } else {
      this.laboratorio.id = uuidv4();
      this.save();
      this.isShowMessage = true;
      this.isSuccess = true;
    }
    this.form.reset();
  }

  save(){
      let self = this;
      let myPromise = new Promise(function(myResolve, myReject) {
        self._labService.save(self.laboratorio).subscribe(

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
          self.laboratorio = new Laboratorio('', '');
        },
        function(error) {
          console.log("Erro ao cadastrar!")
        }
      );
    }

    update(){

      let self = this;
      let myPromise = new Promise(function(myResolve, myReject) {
        self._labService.update(self.laboratorio.id,self.laboratorio).subscribe(
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
        self.laboratorio = new Laboratorio('', '');

      },
      function(error) {
        console.log("Erro ao atualizar!")
      }
    );

    }


}

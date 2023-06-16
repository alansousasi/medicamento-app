import { Laboratorio } from './../../model/laboratorio';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { LaboratorioStorageService } from './laboratorio-storage.service';
import { Shared } from 'src/app/utils/shared';
import { v4 as uuidv4 } from 'uuid';

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

  constructor(public route: ActivatedRoute, private labService: LaboratorioStorageService) {

  }

  ngOnInit(): void {

    Shared.initializeWebStorage();
    this.laboratorio = new Laboratorio('', '');
    this.laboratorio.nome = this.route.snapshot.params['nome'];
    this.laboratorio.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.labService.isExist(this.laboratorio.id)) {
      this.laboratorio.id = uuidv4();
      this.labService.save(this.laboratorio);
    } else {
        this.labService.update(this.laboratorio);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.laboratorio = new Laboratorio('', '');
  }


}

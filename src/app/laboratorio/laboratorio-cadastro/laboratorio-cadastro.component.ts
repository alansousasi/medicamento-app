import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laboratorio-cadastro',
  templateUrl: './laboratorio-cadastro.component.html',
  styleUrls: ['./laboratorio-cadastro.component.css']
})
export class LaboratorioCadastroComponent implements OnInit{
  nome!: string;

  constructor(public route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.nome = this.route.snapshot.params['nome'];
  }

}

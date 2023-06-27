import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-laboratorio-item',
  templateUrl: './laboratorio-item.component.html',
  styleUrls: ['./laboratorio-item.component.css']
})
export class LaboratorioItemComponent implements OnInit{
  @Input() laboratorio!: { nome: any;}
  ngOnInit(): void {
  }
}

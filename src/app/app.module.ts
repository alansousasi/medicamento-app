import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modulos material

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaboratorioItemComponent } from './laboratorio/laboratorio-item/laboratorio-item.component';
import { LaboratorioListaComponent } from './laboratorio/laboratorio-lista/laboratorio-lista.component';
import { LaboratorioCadastroComponent } from './laboratorio/laboratorio-cadastro/laboratorio-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    MedicamentoComponent,
    LaboratorioItemComponent,
    LaboratorioListaComponent,
    LaboratorioCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

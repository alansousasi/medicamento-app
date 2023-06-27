import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// modulos material

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaboratorioItemComponent } from './laboratorio/laboratorio-item/laboratorio-item.component';
import { LaboratorioListaComponent } from './laboratorio/laboratorio-lista/laboratorio-lista.component';
import { LaboratorioCadastroComponent } from './laboratorio/laboratorio-cadastro/laboratorio-cadastro.component';
import { MedicamentoListaComponent } from './medicamento/medicamento-lista/medicamento-lista.component';
import { MedicamentoCadastroComponent } from './medicamento/medicamento-cadastro/medicamento-cadastro.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    LaboratorioItemComponent,
    LaboratorioListaComponent,
    LaboratorioCadastroComponent,
    MedicamentoListaComponent,
    MedicamentoCadastroComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MedicamentoCadastroComponent } from './medicamento/medicamento-cadastro/medicamento-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratorioListaComponent } from './laboratorio/laboratorio-lista/laboratorio-lista.component';
import { LaboratorioCadastroComponent } from './laboratorio/laboratorio-cadastro/laboratorio-cadastro.component';
import { MedicamentoListaComponent } from './medicamento/medicamento-lista/medicamento-lista.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'medicamento', component: MedicamentoListaComponent},
  {path:'laboratorio', component: LaboratorioListaComponent},
  {path:'laboratorio/cadastro/:id', component: LaboratorioCadastroComponent},
  {path:'laboratorio/cadastro', component: LaboratorioCadastroComponent},
  {path:'medicamento/cadastro', component: MedicamentoCadastroComponent},
  {path:'medicamento/cadastro/:id', component: MedicamentoCadastroComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { LaboratorioListaComponent } from './laboratorio/laboratorio-lista/laboratorio-lista.component';
import { LaboratorioCadastroComponent } from './laboratorio/laboratorio-cadastro/laboratorio-cadastro.component';

const routes: Routes = [
  {path:'medicamento', component: MedicamentoComponent},
  {path:'laboratorio', component: LaboratorioListaComponent},
  {path:'laboratorio/cadastro/:id', component: LaboratorioCadastroComponent},
  {path:'laboratorio/cadastro', component: LaboratorioCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

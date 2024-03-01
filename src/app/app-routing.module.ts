import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastoListComponent } from './components/gasto-list/gasto-list.component';

const routes: Routes = [
  { path: 'gastos', component: GastoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

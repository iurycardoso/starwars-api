import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListaComponent } from './films/films-lista/films-lista.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/lista', pathMatch: 'full'
  },
  {
    path: 'lista', component: FilmsListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

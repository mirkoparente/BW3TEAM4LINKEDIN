import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { HomeComponent } from './components/home/home.component';
import { ModificaExpComponent } from './components/modifica-exp/modifica-exp.component';

const routes: Routes = [
  {
    path:"",component: HomeComponent,
    pathMatch: "full",

  },
  {
  path:"modifica-exp", component:ModificaExpComponent
  },
  {
  path:"modifica-exp/:id", component:ModificaExpComponent
  },
  {
    path: 'profilo', component: ProfiloComponent

  },
  { path: 'profilo/:id', component: ProfiloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

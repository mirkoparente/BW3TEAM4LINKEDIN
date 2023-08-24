import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"",component: HomeComponent,
    pathMatch: "full",

  },
  {
    path: 'profilo', component: ProfiloComponent

  },
  { path: 'profilo/:id', component: ProfiloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

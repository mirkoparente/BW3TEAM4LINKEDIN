import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiloComponent } from './components/profilo/profilo.component';

const routes: Routes = [
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { BottomCardComponent } from './components/bottom-card/bottom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfiloComponent,
    BottomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

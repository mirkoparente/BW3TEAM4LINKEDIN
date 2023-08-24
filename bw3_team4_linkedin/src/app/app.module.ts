import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { CardPrincipleComponent } from './components/card-principle/card-principle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BottomCardComponent } from './components/bottom-card/bottom-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatComponent } from './components/chat/chat.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModaleComponent } from './components/modale/modale.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { ModificaExpComponent } from './components/modifica-exp/modifica-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfiloComponent,
    CardPrincipleComponent,
    NavbarComponent,
    BottomCardComponent,
    SidebarComponent,
    ChatComponent,
    FooterComponent,
    ModaleComponent,
    HomeComponent,
    ModificaExpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

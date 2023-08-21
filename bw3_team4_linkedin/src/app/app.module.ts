import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfiloComponent } from "./components/profilo/profilo.component";
import { CardPrincipleComponent } from "./components/card-principle/card-principle.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { BottomCardComponent } from './components/bottom-card/bottom-card.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfiloComponent,
    CardPrincipleComponent,
    NavbarComponent,
    BottomCardComponent,
    SidebarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

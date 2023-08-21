import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(){}
  status: boolean = false;
clickEvent(e: Event){
  console.log('clik avvenuto');
    this.status = !this.status;


}
}

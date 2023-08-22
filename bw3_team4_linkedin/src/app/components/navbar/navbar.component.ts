import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(){}
  status: boolean = false;
  status2: boolean = true;
clickEvent(e: Event){
  console.log('clik avvenuto');
    this.status = !this.status;


}
clickEvent2(){
  this.status2 = !this.status2
  console.log('clik avvenuto');
}
}

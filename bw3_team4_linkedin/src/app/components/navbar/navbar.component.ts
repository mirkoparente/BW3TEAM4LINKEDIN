import { Component } from '@angular/core';
import { Profilo } from 'src/app/interface/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  profilo!: Profilo;
  constructor(public svcProf: CardPrincipaleService) {}
  status: boolean = false;
  status2: boolean = true;
  clickEvent(e: Event) {
    console.log('clik avvenuto');
    this.status = !this.status;
  }
  clickEvent2() {
    this.status2 = !this.status2;
    console.log('clik avvenuto');
  }
  ngOnInit() {
    this.svcProf.get().subscribe((res) => {
      this.profilo = res;
      console.log(res);
    });
  }
}

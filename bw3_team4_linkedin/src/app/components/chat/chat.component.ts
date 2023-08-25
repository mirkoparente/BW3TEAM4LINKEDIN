import { Component } from '@angular/core';
import { Profilo } from 'src/app/interface/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  profile!: Profilo;

  constructor(private privateSvc: CardPrincipaleService) {}

  ngOnInit() {
    this.privateSvc.get().subscribe((res) => {
      this.profile = res;
      console.log(res);
    });
  }

  isAlzato = false;
  isMenuAperto = false;

  toggleMenu() {
    this.isAlzato = !this.isAlzato;
    this.isMenuAperto = !this.isMenuAperto;
  }
}

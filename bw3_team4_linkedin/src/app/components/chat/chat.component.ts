import { Component } from '@angular/core';
import { Profilo } from 'src/app/profilo';
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
}

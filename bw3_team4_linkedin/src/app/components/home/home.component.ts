import { Component } from '@angular/core';
import { Post, Profilo } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  profileData!: Profilo;
  post!: Post[];
  isPostAdmin: boolean = false;

  constructor(private privateSvc: CardPrincipaleService) {}

  ngOnInit() {
    this.privateSvc.getPost().subscribe((data) => {
      this.post = data.reverse();
      console.log('post', this.post);
    });

    this.getProfile();
  }

  //prendo dati profilo principale
  getProfile() {
    this.privateSvc.get().subscribe((resData) => {
      this.profileData = resData;
      console.log('profilo', this.profileData);
    });
  }

  //controllo se il post è stato scritto dall' utente admin o da altri utenti
  ceckPostUser(idUserPost: number) {
    if (idUserPost === this.profileData._id) {
      this.isPostAdmin = true;
    } else {
      this.isPostAdmin = false;
    }
  }
}

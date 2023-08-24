import { Comments, Profilo } from './../../profilo';
import { Component } from '@angular/core';
import { Post } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  post!: Post[];
  toggle: boolean = false;
  profileData!: Profilo;
  isPostAdmin: boolean[] = [];

  commenti: Comments = {
    comment: '',
    rate: '1',
    elementId: '',
  };

  constructor(private privateSvc: CardPrincipaleService) {}

  ngOnInit() {
    //prendi dati profilo
    this.getProfile();

    //prendi tutti i post
    this.privateSvc.getPost().subscribe((data) => {
      this.post = data.reverse().slice(0, 10);

      this.ceckPostUser();
    });
  }

  //prendi commenti
  getCommenti(id: any) {
    this.commenti.elementId = this.post[id]._id;
    this.privateSvc.getComment(this.commenti.elementId).subscribe((res) => {
      // this.post=res
      console.log('Res', res);
    });
  }

  //prendo dati profilo principale
  getProfile() {
    this.privateSvc.get().subscribe((resData) => {
      this.profileData = resData;
      console.log('profilo', this.profileData);
    });
  }

  //controllo se il post è stato scritto dall' utente admin o da altri utenti
  ceckPostUser() {
    this.post.forEach((e) => {
      if (e.user._id === this.profileData._id) {
        this.isPostAdmin.push(true);
      } else {
        this.isPostAdmin.push(false);
      }
    });
  }
}

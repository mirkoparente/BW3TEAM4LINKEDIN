import { Comments, Post, Profilo } from 'src/app/interface/profilo';
import { Component, Input } from '@angular/core';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-commenti-post',
  templateUrl: './commenti-post.component.html',
  styleUrls: ['./commenti-post.component.scss'],
})
export class CommentiPostComponent {
  @Input() post!: Post;

  @Input() id!: string;

  toggle: boolean = false;
  newToggle: boolean = false;
  profileData!: Profilo;
  isPostAdmin: boolean = false;

  commenti: Comments = {
    comment: '',
    rate: '1',
    elementId: '',
    _id: '',
  };
  constructor(private privateSvc: CardPrincipaleService) {}

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

  // getCommenti(id: any) {
  //   this.commenti.elementId = this.posts[id]._id;
  //   this.privateSvc.getComment(this.commenti.elementId).subscribe((res) => {
  //     // this.post=res
  //     console.log("Res", res);
  //   });
  // }
}

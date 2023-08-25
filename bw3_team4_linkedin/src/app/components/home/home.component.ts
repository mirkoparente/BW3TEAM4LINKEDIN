import { Comments, Profilo } from './../../profilo';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';
import { CommentiComponent } from "../commenti/commenti.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  post!: Post[];

  toggle: boolean = false;
  newToggle: boolean = false;
  profileData!: Profilo;
  isPostAdmin: boolean[] = [];
  textPostMod: string = '';

  commenti: Comments = {
    comment: "",
    rate: "1",
    elementId: "",
    _id: "",
  };

  constructor(
    private privateSvc: CardPrincipaleService,
    private router: Router
  ) {}

  ngOnInit() {
    //prendi dati profilo
    this.getProfile();

    //prendi tutti i post
    this.privateSvc.getPost().subscribe((data) => {
      this.post = data.reverse().slice(0, 10);

      this.ceckPostUser();
      this.post.forEach((post) => {
        post.createdAt= new Date(post.createdAt).toLocaleTimeString("it");
      })
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

  //cancello il post
  deletePost(idPost: string) {
    this.privateSvc.deletePostId(idPost).subscribe((res) => {
      this.post = this.post.filter((e) => e._id !== idPost);
    });
  }

  //apro modale modifica
  openModifyModal(textPost: string) {
    this.textPostMod = textPost;
    console.log(this.textPostMod);
  }

  //modifico il post
  modifyPost(form: NgForm, idPost: string) {
    this.privateSvc.modifyPost(idPost, form.value).subscribe((res) => {
      window.location.reload();
    });
  }
}

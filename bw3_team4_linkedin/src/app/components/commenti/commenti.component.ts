import { Component, Input } from "@angular/core";
import { Commento, Comments, Post, Profilo } from "../../profilo";
import { CardPrincipaleService } from "../../service/card-principale.service";
import { ProfileMe } from "src/app/interface/profile-me";

@Component({
  selector: "app-commenti",
  templateUrl: "./commenti.component.html",
  styleUrls: ["./commenti.component.scss"],
})
export class CommentiComponent {
  @Input() profilo!:Profilo
  @Input() commento!: Comments;
  @Input() id!: string;
  @Input() newId!: string;
  newToggle: boolean = false;
  comment!: Comments[];

  posts!: Post[];

  newCommento: Commento = {
    comment: "",
    rate: "1",
    elementId: "",
  };

  constructor(private privateSvc: CardPrincipaleService) {}

  postComment(id: any) {
    this.newCommento.elementId = id;
    this.privateSvc.postComment(this.newCommento).subscribe((res) => {
      // this.comment = res;
      console.log("post", res);
      console.log(this.comment);
      // console.log(this.commenti.comment);
    });
    this.privateSvc.getComment(this.newCommento.elementId).subscribe((res) => {
      this.comment = res;
    });
    //   this.privateSvc.getPost().subscribe((data) => {
    //     this.post = data.reverse();
    //     console.log(this.post);
    //   });
  }

  getCommenti(id: any) {
    this.newCommento.elementId = id;
    this.privateSvc.getComment(this.newCommento.elementId).subscribe((res) => {
      this.comment = res;
      console.log("get", res);
    });
  }

  putCommenti(id: any) {
    this.privateSvc.putComment(this.newCommento, id).subscribe((res) => {
      // this.comment = res;
      console.log("modifica", res);
      this.privateSvc.getComment(this.newCommento.elementId).subscribe((res) => {
        this.comment = res;
      });
      // window.location.reload();
    });
  }

  deleteCommenti(id: any) {
    this.privateSvc.deleteComment(id).subscribe((res) => {
      // this.comment = res;
      console.log("elimina", res);
      this.privateSvc.getComment(this.newCommento.elementId).subscribe((res) => {
        this.comment = res;
      });
    });
  }

  // ngOnInit(){
  //   this.privateSvc.get().subscribe((res) => {
  //     this.profile = res;
  //   });
  // }

}

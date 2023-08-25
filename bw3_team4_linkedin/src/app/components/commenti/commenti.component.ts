import { Component, Input } from "@angular/core";
import { Commento, Comments, Post } from "../../profilo";
import { CardPrincipaleService } from "../../service/card-principale.service";

@Component({
  selector: "app-commenti",
  templateUrl: "./commenti.component.html",
  styleUrls: ["./commenti.component.scss"],
})
export class CommentiComponent {
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
      this.comment = res;
      console.log("post", res);
      console.log(this.comment);
      // console.log(this.commenti.comment);
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
      console.log("comment", this.comment);
    });
  }

  deleteCommenti(id: any) {
    this.privateSvc.deleteComment(id).subscribe((res) => {
      this.comment = res;
      console.log("elimina", res);
    });
    this.privateSvc.getComment(this.newCommento.elementId).subscribe((res) => {
      this.comment = res;
    });
  }
}

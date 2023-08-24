import { Component, Input } from "@angular/core";
import { Comments } from "../../profilo";
import { CardPrincipaleService } from "../../service/card-principale.service";

@Component({
  selector: "app-commenti",
  templateUrl: "./commenti.component.html",
  styleUrls: ["./commenti.component.scss"],
})
export class CommentiComponent {
  @Input() commento!: Comments;
  @Input() id!: string;
  newToggle: boolean = false;
  comment!: Comments[];
  newCommento: Comments = {
    comment: "",
    rate: "1",
    elementId: "",
  };

  constructor(private privateSvc: CardPrincipaleService) {}

  postComment(id: any) {
    this.newCommento.elementId = id;
    this.privateSvc.postComment(this.newCommento).subscribe((res) => {
      this.comment = res;
      console.log("Res", res);
      console.log(this.comment);
      // console.log(this.commenti.comment);
    });
    //   this.privateSvc.getPost().subscribe((data) => {
    //     this.post = data.reverse();
    //     console.log(this.post);
    //   });
  }
}

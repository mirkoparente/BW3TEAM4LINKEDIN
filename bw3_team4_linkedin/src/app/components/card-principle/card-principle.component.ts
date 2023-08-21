import { Component } from "@angular/core";
import { Profilo } from "src/app/profilo";
import { CardPrincipaleService } from "src/app/service/card-principale.service";

@Component({
  selector: "app-card-principle",
  templateUrl: "./card-principle.component.html",
  styleUrls: ["./card-principle.component.scss"],
})
export class CardPrincipleComponent {
  profile!: Profilo;
  constructor(private privateSvc: CardPrincipaleService) {}

  ngOnInit() {
    this.privateSvc.get().subscribe((res) => {
      this.profile = res;
      console.log(res);
    });
  }
}

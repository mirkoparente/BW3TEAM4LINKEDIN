import { Component, OnInit } from '@angular/core';
import { Profilo } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  mineProfile!: Profilo;
  constructor(
    private profileService: CardPrincipaleService,
  ) {}
  ngOnInit(): void {

    this.getMineProfile();
  }

  getMineProfile() {
    this.profileService.get().subscribe((resData) => {
      this.mineProfile = resData;
    });
  }
  onInput(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
  }
}

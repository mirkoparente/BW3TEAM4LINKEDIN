import { Component } from '@angular/core';
import { Post } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  post!:Post[]
  constructor(private privateSvc: CardPrincipaleService) {}

  ngOnInit(){
    this.privateSvc.getPost().subscribe(data => {
      this.post=data
      console.log(this.post);

    }
      )
  }
}

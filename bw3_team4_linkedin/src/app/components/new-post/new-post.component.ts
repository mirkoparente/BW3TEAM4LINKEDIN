import { Component, OnInit } from '@angular/core';
import { Post, Profilo } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  mineProfile!: Profilo;
  post!: Post;
  newPost: Partial<Post> =  {
    text:'',
  }
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
    this.newPost.text = (<HTMLInputElement>event.target).value
    console.log((<HTMLInputElement>event.target).value);
  }
  addPost(post: Partial<Post>){
    this.profileService.addPost(this.newPost).subscribe()
  }
}

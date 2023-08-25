import { Component } from '@angular/core';
import { Profilo } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-side-home',
  templateUrl: './side-home.component.html',
  styleUrls: ['./side-home.component.scss']
})
export class SideHomeComponent {
  profilo!: Profilo
  constructor(public svcProfile : CardPrincipaleService){}
  ngOnInit(){
    this.svcProfile.get().subscribe((res) => {
      this.profilo = res;
      console.log(res);
    })}
}

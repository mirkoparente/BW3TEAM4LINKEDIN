import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Profilo } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-bottom-card',
  templateUrl: './bottom-card.component.html',
  styleUrls: ['./bottom-card.component.scss'],
})
export class BottomCardComponent {
  profile!: Profilo;
  id!: string;
  profileDataId!: Profilo;



  constructor( private router: ActivatedRoute,
    private routing: Router,
    private privateSvc: CardPrincipaleService) {}


  ngOnInit() {
    this.privateSvc.get().subscribe((res) => {
      this.profile = res;
    });

    //prendo l'id parametro
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
    });

    //eseguo la funzione solamente se siamo nel profilo con /id
    if (this.id) {
      this.getServiceProfileId();
    } else {
      //se l'id non c'è carico il profilo principale
    }

    //ogni volta che si cambia rotta esegue la funzione
    this.routing.events.subscribe((event) => {
      this.router.params.subscribe((params) => {
        if (event instanceof NavigationStart) {
          this.getServiceProfileId();
        }
      });
    });
  }



   //prendo i dati del profilo ID
   getServiceProfileId() {
    this.privateSvc.getIdProfile(this.id).subscribe((resData) => {
      this.profileDataId = resData;
    });
  }


  ngOnChanges() {
    this.getServiceProfileId();
  }
}







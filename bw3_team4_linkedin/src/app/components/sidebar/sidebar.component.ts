import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profilo } from 'src/app/profilo';
import { ProfiloService } from 'src/app/profilo.service';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  [x: string]: any;
  mineProfile!: Profilo;
  sideProfileA: Profilo[] = [];
  sideProfileB: Profilo[] = [];
  profileB: boolean = false;

  constructor(
    private profileService: CardPrincipaleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allProfile();
    this.getMineProfile();
  }

  getMineProfile() {
    this.profileService.get().subscribe((resData) => {
      this.mineProfile = resData;
    });
  }

  allProfile() {
    //prendo tutti i profili
    this.profileService.getAllProfile().subscribe((resData) => {
      const uniqueNumbers: number[] = [];

      //prendo 10 numeri dandom da 0 alla lunghezza dell' array profili
      while (uniqueNumbers.length < 10) {
        const randomNumber = Math.floor(Math.random() * resData.length);
        if (!uniqueNumbers.includes(randomNumber)) {
          uniqueNumbers.push(randomNumber);
        }
      }

      //metto nel mio array i profili random
      for (let i = 0; i < 5; i++) {
        this, (this.sideProfileA[i] = resData[uniqueNumbers[i]]);
      }
      console.log(this.sideProfileA);

      for (let i = 5, y = 0; i < 10; i++, y++) {
        this, (this.sideProfileB[y] = resData[uniqueNumbers[i]]);
      }
      console.log(this.sideProfileB);
    });
  }

  //apri/chiudi più profile
  toggleProfileB() {
    if (this.profileB == false) {
      this.profileB = true;
    } else {
      this.profileB = false;
    }
  }
}

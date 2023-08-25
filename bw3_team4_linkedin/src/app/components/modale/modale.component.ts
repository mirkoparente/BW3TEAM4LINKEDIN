import { Component } from '@angular/core';
import { Exp, Profilo, addExp } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.scss'],
})
export class ModaleComponent {
  exp!: Exp[];
  profile!:Profilo
  formData: addExp = {
    role: '',
    company: '',
    startDate: '',
    description: '',
    area: '',
  };


  constructor(private privateSvc: CardPrincipaleService) {}

  ngOnInit() {
    this.privateSvc.getExp().subscribe((res) => {
      this.exp = res;
      res.forEach((exp) =>exp.startDate=new Date(exp.startDate).toLocaleDateString('it',{year:"numeric",month:"short"}));
      console.log(this.exp);
    });
    this.privateSvc.get().subscribe((res) => {
      this.profile=res
      console.log(res);

    })
  }


    // this.privateSvc.getExp().subscribe((res) => {
    //   this.exp = res;
    //   res.forEach((exp) =>exp.startDate=new Date(exp.startDate).toLocaleDateString('it',{year:"numeric",month:"short"}));
    //   console.log(this.exp);
    // });

    saveExp() {
      this.privateSvc.addExp(this.formData).subscribe((exp) => {
        console.log('registrato', exp);
        alert('Esperienza aggiunta');
        this.privateSvc.getExp().subscribe((res) => {
          this.exp = res;
          res.forEach((exp) =>exp.startDate=new Date(exp.startDate).toLocaleDateString('it',{year:"numeric",month:"short"}));
          console.log(this.exp);
        });
      });
  }
}

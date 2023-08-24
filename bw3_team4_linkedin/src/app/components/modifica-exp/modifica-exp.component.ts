import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exp, addExp } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-modifica-exp',
  templateUrl: './modifica-exp.component.html',
  styleUrls: ['./modifica-exp.component.scss']
})
export class ModificaExpComponent {
  exp!: Exp[];
  _id!:string;
  expId!:Exp
  formData: addExp = {
    role: '',
    company: '',
    startDate: '',
    description: '',
    area: '',
  };

  constructor(private privateSvc: CardPrincipaleService,
    private router: ActivatedRoute) {}

  ngOnInit() {
    this.privateSvc.getExp().subscribe((res) => {
      this.exp = res;
      res.forEach(
        (exp) =>
          (exp.startDate = new Date(exp.startDate).toLocaleDateString('it', {
            year: 'numeric',
            month: 'short',
          }))
      );
      console.log(this.exp);
    });

    this.router.paramMap.subscribe((params) => {
      this._id = params.get('_id')!;
    });

  }



  getIdExp(){
    this.privateSvc.getIdExp(this._id).subscribe((res) => {
      this.expId=res
      console.log(res);
    });
  }

  update(){
    this.privateSvc.changeExp(this.formData,this._id).subscribe((res) => {
      console.log("Update", res);

    })
  }

}

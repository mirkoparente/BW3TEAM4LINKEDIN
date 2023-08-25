import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exp, Profilo, addExp } from 'src/app/profilo';
import { CardPrincipaleService } from 'src/app/service/card-principale.service';

@Component({
  selector: 'app-modifica-exp',
  templateUrl: './modifica-exp.component.html',
  styleUrls: ['./modifica-exp.component.scss'],
})
export class ModificaExpComponent {
  exp!: Exp[];
  profile!: Profilo;
  _id!: string;
  id!: string;
  expId!: Exp;

  formData: addExp = {
    role: '',
    company: '',
    startDate: '',
    description: '',
    area: '',
  };

  constructor(
    private privateSvc: CardPrincipaleService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.privateSvc.getExp().subscribe((res) => {
      this.exp = res;
      console.log(this.exp);

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
      this._id = params.get('id')!;
      console.log(this._id);
    });
  }

  getIdExp(i: number) {
    this.privateSvc.getIdExp(this.exp[i]._id).subscribe((res) => {
      this.expId = res;
      console.log("expid",this.expId);
      this.formData=this.expId
    });
  }

  update() {
    this.privateSvc
      .changeExp(this.formData, this.expId._id)
      .subscribe((res) => {
        console.log('Update', this.formData);
        alert('Esperienza Modificata');
        this.privateSvc.getExp().subscribe((res) => {
          this.exp = res;
          console.log(this.exp);

          res.forEach(
            (exp) =>
              (exp.startDate = new Date(exp.startDate).toLocaleDateString(
                'it',
                {
                  year: 'numeric',
                  month: 'short',
                }
              ))
          );
          console.log(this.exp);
        });
      });
  }

  delete() {
    this.privateSvc.deleteExp(this.expId._id).subscribe((res) => {
      alert('Esperienza Eliminata');
      this.privateSvc.getExp().subscribe((res) => {
        this.exp = res;
      });
    });
  }
  saveExp() {
    this.privateSvc.addExp(this.formData).subscribe((exp) => {
      console.log('registrato', exp);
      alert('Esperienza aggiunta');
      this.formData.area = '';
      this.formData.company = '';
      this.formData.description = '';
      this.formData.role = '';
      this.formData.startDate = '';
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
    });
  }
}

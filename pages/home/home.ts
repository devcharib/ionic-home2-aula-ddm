import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalheComponent } from '../detalhe/detalhe.component';
import alunos from './alunos.json';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  alunos : [];

  constructor(public navCtrl: NavController) {
    this.alunos = alunos.alunos;
  }

  seleciona( x ){
    console.log(x);
    this.navCtrl.push(DetalheComponent, {aluno : x});
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalheComponent } from '../detalhe/detalhe.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import alunos from './alunos.json';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  alunos : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.alunos = alunos.alunos;

    var nome = this.navParams.get('nome');
    var curso = this.navParams.get('curso');
    if(nome && curso){
        var novo ={
          id : this.alunos.length + 1,
          teste : this.alunos.length,
          nome : nome,
          curso : curso
        };
        this.alunos.push(novo);
        console.log(novo);
    }
  }

  seleciona( x ){
    console.log(x);
    this.navCtrl.push(DetalheComponent, {aluno : x});
  }
  Adiciona(){
    this.navCtrl.push(CadastroComponent);
  }
}

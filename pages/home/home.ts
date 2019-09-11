import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DetalheComponent } from '../detalhe/detalhe.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import alunos from './alunos.json';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  alunos : any[];
  msg;
  num1;
  num2;
  sorteado;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.alunos = alunos.alunos;

    var nome = this.navParams.get('nome');
    var curso = this.navParams.get('curso');
    if(nome && curso){
        var novo ={
          id : this.alunos.length + 1,
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

   presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  random(): number {
    var a = parseInt(this.navParams.get('id')+5);
    var b = parseInt(this.navParams.get('id')+10);
    console.log(a)
    if (a && b) {
      this.msg = 'Tem que preencher os campos seu animal!';
      this.presentToast(this.msg);
    }else{
      if (a > -1 && b < 10000) {
        if (a == b) {
          this.msg = 'Não use números iguais!';
          this.presentToast(this.msg);
          this.num1 = '';
          this.num2 = '';
        }
        if (a > b) {
          console.log('A é maior que B')
          this.msg = 'Número inicial não deve ser maior que o final criatura!';
          this.presentToast(this.msg);
          this.num1 = '';
          this.num2 = '';
        }else{
          let rand = Math.floor(Math.random()*(b-a+1)+a);
          return this.sorteado = rand;
        }
      }else{
        this.msg = 'Os números devem ser entre 0 e 99999';
        this.presentToast(this.msg);
        this.num1 = '';
        this.num2 = '';
      }
      
       
    }    
  }
}

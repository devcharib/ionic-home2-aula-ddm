import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome : string ='';
  curso : string ='';

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }


  cadastrar(){
    this.navCtrl.push(HomePage, {nome : this.nome, curso: this.curso});
  }
}
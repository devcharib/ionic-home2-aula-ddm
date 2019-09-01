import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  aluno;

  constructor( public navParams : NavParams) { 
    this.aluno = this.navParams.get('aluno');
  }

  ngOnInit() {
  }

}
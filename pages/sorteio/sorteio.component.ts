import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent implements OnInit {

  aluno;
  constructor(public navParams : NavParams) { }

  ngOnInit() {
  }
  
  Sortear() {

    
  }

}
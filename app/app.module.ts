import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { DetalheComponent } from '../pages/detalhe/detalhe.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalheComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalheComponent,
    CadastroComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

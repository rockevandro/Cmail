import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './components/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './components/login/login.component';
import { ModuloRoteamento } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CadastroModule } from './modules/cadastro.module';
import { CmailFormModule } from './modules/cmail-form.module';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    HttpClientModule,
    CadastroModule,
    SharedModule,
    CmailFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

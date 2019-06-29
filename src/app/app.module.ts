import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './components/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

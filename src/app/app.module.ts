import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './components/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './components/cmail-form-group/cmail-form-field-directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    CadastroComponent,
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './components/caixa-de-entrada/caixa-de-entrada.component';
import { RoteamentoModule } from './modules/roteamento.module';
import { HttpClientModule } from '@angular/common/http';
import { CmailFormModule } from './modules/cmail-form.module';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoteamentoModule,
    HttpClientModule,
    SharedModule,
    CmailFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

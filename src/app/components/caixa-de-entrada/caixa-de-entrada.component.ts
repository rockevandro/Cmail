import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent {

  constructor(private emailService: EmailService) { }

  private _isNewEmailFormOpen = false;
  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid)
      return;

    this.emailService.enviar(this.email).subscribe(emailApi => {
      this.emailList.push(emailApi);

      this.email = {
        destinatario: '',
        assunto: '',
        conteudo: ''
      };

      formEmail.reset();
    }, (erro: HttpErrorResponse) => {
      console.log(erro);
    })
  }
}

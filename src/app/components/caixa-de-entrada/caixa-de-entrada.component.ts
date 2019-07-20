import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PageDataService } from 'src/app/services/page-data.service';
import { HeaderDataService } from 'src/app/services/header-data.service';

@Component({
  selector: 'caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private emailService: EmailService, private pageDataService: PageDataService,
    private headerDataService: HeaderDataService) { }
  
  private _isNewEmailFormOpen = false;
  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  termoParaFiltro = '';

  ngOnInit(): void {
    this.emailService.listar().subscribe(lista => {
      this.emailList = lista
    });

    this.pageDataService.defineTitulo('Caixa de entrada');

    this.headerDataService.valorDoFiltro.subscribe(novoValor => {
      this.termoParaFiltro = novoValor;
    });
  }

  filtrarEmailsPorAssunto(){
    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();

    return this.emailList.filter(email => {
      const assunto = email.assunto.toLowerCase();
      return assunto.includes(termoParaFiltroEmMinusculo);
    })
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

    this.emailService.enviar(this.email)
    .subscribe(emailApi => {

      // concat é necessário caso utilizemos o filtro com pipe (... | ... : ...)
      //this.emailList = this.emailList.concat(emailApi)
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

  handleRemoveEmail(eventoVaiRemover, emailId) {

    console.log(eventoVaiRemover);

    if (eventoVaiRemover.status === 'removing') {
      this.emailService.deletar(emailId).subscribe(res => {
        console.log(res);
        this.emailList = this.emailList.filter(email => email.id != emailId);
      }, err => console.error(err));
    }
  }
}

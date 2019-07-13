import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Email } from '../models/email';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private static readonly api = 'http://localhost:3200/emails';
    private static readonly cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN') });

    constructor(private http: HttpClient) { }

    enviar({ destinatario, assunto, conteudo }) {
        const emailParaApi = {
            to: destinatario,
            subject: assunto,
            content: conteudo,

        };

        return this.http
            .post(EmailService.api, emailParaApi, { headers: EmailService.cabecalho })
            .pipe<Email>(map((emailApi: any) => {
                return new Email({
                    destinatario: emailApi.to,
                    assunto: emailApi.subject,
                    conteudo: emailApi.content,
                    dataDeEnvio: emailApi.created_at
                })
            }))
    }
}
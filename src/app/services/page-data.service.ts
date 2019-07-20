import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PageDataService{
    titulo = new Subject<string>();

    defineTitulo(novoTitulo: string){
        novoTitulo = `${novoTitulo} - CMail`;
        document.querySelector('title').textContent = novoTitulo;
        this.titulo.next(novoTitulo);
    }
}
import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: '[cmailFormField]'
})
export class CmailFormFieldDirective implements OnInit{

constructor(private campo: ElementRef) {}

    ngOnInit(): void {
        const campo = this.campo.nativeElement;

        if(campo.name){
            campo.id = campo.name;
            campo.setAttribute('placeholder', ' ');
            campo.classList.add('mdl-textfield__input');
        }
        else
            throw new Error("Atributo 'name' é obrigatório");
    }
}
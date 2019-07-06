import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { CadastroComponent } from '../components/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CmailFormModule } from './cmail-form.module';

@NgModule({
    declarations:[
        CadastroComponent
    ],
    imports:[
        SharedModule,
        ReactiveFormsModule,
        CommonModule,
        CmailFormModule
    ],
})
export class CadastroModule{

}
import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { CadastroComponent } from '../components/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CmailFormModule } from './cmail-form.module';
import { CadastroRoutingModule } from './cadastro-routing-module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        CadastroComponent
    ],
    imports:[
        SharedModule,
        ReactiveFormsModule,
        CommonModule,
        CmailFormModule,
        RouterModule,
        CadastroRoutingModule
    ],
})
export class CadastroModule{

}
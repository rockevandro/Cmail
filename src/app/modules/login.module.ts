import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { CommonModule } from '@angular/common';
import { CmailFormModule } from './cmail-form.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { LoginRoutingModule } from './login-routing-module';

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:[
        SharedModule,
        CommonModule,
        CmailFormModule,
        RouterModule,
        LoginRoutingModule
    ],
})
export class LoginModule{

}
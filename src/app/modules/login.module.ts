import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { CommonModule } from '@angular/common';
import { CmailFormModule } from './cmail-form.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { LoginRoutingModule } from './login-routing-module';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:[
        SharedModule,
        CommonModule,
        CmailFormModule,
        RouterModule,
        LoginRoutingModule,
        FormsModule
    ],
    providers:[
        LoginService
    ]
})
export class LoginModule{

}
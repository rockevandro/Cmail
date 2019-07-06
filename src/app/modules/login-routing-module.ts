import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

const rotasLogin: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(rotasLogin)
    ],
    exports:[
        RouterModule
    ]
})
export class LoginRoutingModule{}
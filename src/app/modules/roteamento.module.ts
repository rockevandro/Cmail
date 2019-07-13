import { Routes, RouterModule } from "@angular/router";
import { CaixaDeEntradaComponent } from '../components/caixa-de-entrada/caixa-de-entrada.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    { path: '', loadChildren: 'src/app/modules/login.module#LoginModule' },
    { path: 'inbox', component: CaixaDeEntradaComponent, canActivate: [AuthGuard] },
    { path: 'cadastro', loadChildren: 'src/app/modules/cadastro.module#CadastroModule' },
    { path: '**', redirectTo: 'inbox' },
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
    providers:[
        AuthGuard
    ]
})
export class RoteamentoModule{}
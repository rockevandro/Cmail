import { Routes, RouterModule } from "@angular/router";
import { CaixaDeEntradaComponent } from '../components/caixa-de-entrada/caixa-de-entrada.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', loadChildren: 'src/app/modules/login.module#LoginModule' },
    { path: 'inbox', component: CaixaDeEntradaComponent },
    { path: 'cadastro', loadChildren: 'src/app/modules/cadastro.module#CadastroModule' },
    { path: '**', redirectTo: 'inbox' },
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RoteamentoModule{}
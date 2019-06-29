import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { CaixaDeEntradaComponent } from './components/caixa-de-entrada/caixa-de-entrada.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'inbox', component: CaixaDeEntradaComponent},
{path: 'cadastro', component: CadastroComponent},
{path: '**', redirectTo: 'inbox'},
]

export const ModuloRoteamento = RouterModule.forRoot(routes);
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoTabelaComponent } from './components/produto-tabela/produto-tabela.component';
import { HomeComponent } from './components/home/home.component'; // Import HomeComponent
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'produtotabela',
        component: ProdutoTabelaComponent
    },
    {
        path: '',
        component: HomeComponent // Use HomeComponent here
    },
    {
        path: '**',
        component: NotFoundComponent // Use NotFoundComponent here
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
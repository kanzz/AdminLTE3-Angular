import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/paginas/index/index.component';
import { Pagina1Component } from './components/paginas/pagina1/pagina1.component';
import { Pagina2Component } from './components/paginas/pagina2/pagina2.component';


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'pagina1', component: Pagina1Component},
  { path: 'pagina2', component: Pagina2Component},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

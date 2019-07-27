import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnviaCorreoComponent} from './envia-correo/envia-correo.component'


const routes: Routes = [
  {path:'',component:EnviaCorreoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
